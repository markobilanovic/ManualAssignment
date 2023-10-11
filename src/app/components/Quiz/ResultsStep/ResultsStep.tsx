import styles from './resultsStep.module.css'
import {ReactNode} from "react";
export default function ResultsStep({children}: {children: ReactNode}) {
  return <div className={styles.root}>
    <div className={styles.message}>
      {children}
    </div>
    <a href={"/"} className={styles.homeLink}>Go home</a>
  </div>
}