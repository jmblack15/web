import Image from "next/image"
import styles from './cardProjects.module.css'

const CardProjects = ({ img, name }) => {
  return (
    <div className={styles.card}>
      <Image src={img} alt="project" width={360} height={347} />
      <span>{name}</span>
    </div>
  )
}

export { CardProjects }