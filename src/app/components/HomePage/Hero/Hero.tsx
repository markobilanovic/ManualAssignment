import styles from './hero.module.css'
// import Image from 'next/image'

export default function Hero({ onStartQuiz }: { onStartQuiz: () => void }) {
  return (
    <div className={styles.hero}>
      <a className={styles.top_logo}>
        {/*<Image src={'/icons/logo.svg'} alt={'Logo'} width={40} height={40} priority={false} placeholder={'empty'} />*/}
        <img alt={'Logo'} src={'/icons/logo.svg'} />
      </a>
      <div className={styles.hero_content}>
        <h1 className={styles.title}>Be good to yourself</h1>
        <h2 className={styles.subtitle}>
          We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside
          and out.
        </h2>
        <button onClick={onStartQuiz} className={styles.quiz_button}>
          Take the quiz
        </button>
      </div>
    </div>
  )
}
