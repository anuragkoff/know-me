import styles from './card.module.css';
import { FaGithub } from "react-icons/fa";

export default function card({ name, description, github }: { name?: string; description?: string; github?: string }) {
  return (
    <>
    <div className={styles.card}>
        <div className={styles.cardImage}>IMG</div>
        <div className={styles.category}> {name} </div>
        <div className={styles.heading}>
            {description}
            <div className='flex items-end'>
                <div className={styles.author}> By <span className={styles.name}>Abi</span> 4 days ago</div>
                <a className={styles.icons} href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                </a>
            </div>
        </div>
    </div>
    </> 
  )
}
