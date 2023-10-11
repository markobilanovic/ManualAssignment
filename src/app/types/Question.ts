export type Question = {
  question: string
  type: string
  options: QuestionOption[]
}

type QuestionOption = {
  display: string
  value: string
  isRejection: boolean
}
