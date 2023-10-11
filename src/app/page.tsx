import HomePage from '@/app/components/HomePage/HomePage'

const questionsUrl = 'https://manual-case-study.herokuapp.com/questionnaires/972423.json'

async function getQuestionsData() {
  const res = await fetch(questionsUrl)
  if (!res.ok) {
    // fallback to empty questions
    return { questions: [] }
  }
  return res.json()
}

export default async function Home() {
  const data = await getQuestionsData()
  return <HomePage questions={data.questions} />
}
