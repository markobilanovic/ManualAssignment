import styles from './problemSection.module.css'
import { Problem } from '@/app/types/Problems'

type ProblemSectionProps = {
  problem: Problem
  isReverse?: boolean
  index: number
}

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')

export const ProblemSection = ({ problem, isReverse, index }: ProblemSectionProps) => {
  const { title, subtitle, description, imgSrc, imgAlt } = problem

  const numberStyle = isReverse ? styles.n01 : styles.n02
  const numberToString = zeroPad(index + 1, 2)

  return (
    <section className={styles.root}>
      <div className={`${styles.contentWrapper} ${isReverse ? styles.reverseWrapper : ''}`}>
        <div className={`${styles.number} ${numberStyle}`}>{numberToString}</div>
        <div className={styles.textArea}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <span className={styles.description}>{description}</span>
        </div>
        <img className={styles.img} alt={imgAlt} src={imgSrc} />
      </div>
    </section>
  )
}
