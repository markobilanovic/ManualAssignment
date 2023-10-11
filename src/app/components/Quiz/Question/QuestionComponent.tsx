import DOMPurify from 'dompurify'
import styles from './questionComponent.module.css'
import { Question } from '@/app/types/Question'

type QuestionComponentProps = {
  question: Question
  value: any
  onReject: () => void
  onBack: () => void
  setAnswer: (answer: any) => void
}

export default function QuestionComponent({ question, value, onReject, onBack, setAnswer }: QuestionComponentProps) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p className={styles.question}>{question.question}</p>
        <div className={styles.options}>
          {question.options.map((option) => {
            const sanitizedOption = DOMPurify.sanitize(option.display)
            const isSelected = value === option.value
            const className = isSelected ? `${styles.option} ${styles.selected}` : `${styles.option}`
            return (
              <div
                key={option.value}
                className={className}
                onClick={() => {
                  if (option.isRejection) {
                    onReject()
                    return
                  }

                  setAnswer(option.value)
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: sanitizedOption }} />
              </div>
            )
          })}
        </div>
        <button onClick={onBack} className={styles.quiz_button}>
          ←
        </button>
      </div>
    </div>
  )
}
