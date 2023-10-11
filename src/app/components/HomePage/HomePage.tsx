'use client'
import { useCallback, useState } from 'react'
import { Question } from '@/app/types/Question'
import ResultsStep from '@/app/components/Quiz/ResultsStep/ResultsStep'
import RejectedMessage from '@/app/components/Quiz/ResultsStep/Messages/RejectedMessage'
import SuccessMessage from '@/app/components/Quiz/ResultsStep/Messages/SuccessMessage'
import QuestionComponent from '@/app/components/Quiz/Question/QuestionComponent'
import Hero from '@/app/components/HomePage/Hero/Hero'
import styles from '@/app/page.module.css'
import { problems } from '@/app/components/HomePage/problems'
import { ProblemSection } from '@/app/components/HomePage/ProblemSection/ProblemSection'
import Footer from '@/app/components/HomePage/Footer/Footer'

const isQuizActive = (currentQuestion: number, questions: Question[]) => {
  return questions.length > 0 && currentQuestion > -1 && currentQuestion < questions.length
}
export default function HomePage({ questions }: { questions: Question[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(-1)
  const [answers, setAnswers] = useState<any[]>([])
  const [isRejected, setIsRejected] = useState<boolean>(false)
  const [isPassed, setIsPassed] = useState<boolean>(false)

  const onStartQuiz = useCallback(() => {
    if (questions.length === 0) {
      alert('No questions found')
      return
    }
    setCurrentQuestion(0)
  }, [setCurrentQuestion, questions])

  const setAnswer = useCallback(
    (answer: any) => {
      setAnswers((prevState) => {
        if (currentQuestion > -1 && prevState.length > currentQuestion) {
          // replace answer
          prevState[currentQuestion] = answer
          return [...prevState]
        }

        // add answer
        return [...prevState, answer]
      })

      if (questions?.length && currentQuestion === questions.length - 1) {
        // answered last question without rejection
        setIsPassed(true)
      }

      setCurrentQuestion((prevState) => ++prevState)
    },
    [setAnswers, currentQuestion, setCurrentQuestion, questions, setIsPassed],
  )

  if (isRejected) {
    return (
      <ResultsStep>
        <RejectedMessage />
      </ResultsStep>
    )
  }

  if (isPassed) {
    return (
      <ResultsStep>
        <SuccessMessage />
      </ResultsStep>
    )
  }

  if (questions && isQuizActive(currentQuestion, questions)) {
    return (
      <QuestionComponent
        question={questions[currentQuestion]}
        value={answers[currentQuestion] || null}
        onReject={() => setIsRejected(true)}
        onBack={() =>
          setCurrentQuestion((prevState) => {
            if (prevState === 0) {
              // reset answers if returned to landing page
              setAnswers([])
            }
            return --prevState
          })
        }
        setAnswer={setAnswer}
      />
    )
  }

  return (
    <main>
      <Hero onStartQuiz={onStartQuiz} />
      <h3 className={styles.services_text}>What we can help with</h3>
      <div>
        {problems.map((problem, index) => {
          return <ProblemSection key={problem.title} problem={problem} isReverse={index % 2 === 0} index={index} />
        })}
      </div>
      <Footer />
    </main>
  )
}
