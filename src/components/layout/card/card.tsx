import Image from 'next/image';
import styles from './card.module.css';
import { FaGithub } from "react-icons/fa";

export default function Card({
  name,
  description,
  github,
  img,
}: {
  name: string;
  description: string;
  github: string;
  img: string;
}) {
  return (
    <div className={styles.card} id="projects">
        <div className={styles.cardImage}>
          {img ? (
            <Image
              src={img}
              alt={name ?? 'card image'}
              width={320}
              height={180}
              className={styles.image}
            />
          ) : null}
        </div>
        <div className={styles.category}> {name} </div>
        <div className={styles.heading}>
            {description}
            <div className='bottom-3 right-3'>
                <a className={styles.icons} href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={25} />
                </a>
            </div>
        </div>
    </div>
  )
}
