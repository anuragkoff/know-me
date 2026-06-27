import styles from '@/styles/stacked-card.module.css';

type propsInter = {
    title: string,
    subtitle: string,
    description: string
}

export default function StackedCard({ title, subtitle, description }: propsInter) {
    return (
        <div className={`cardContainer ${styles.stackContainer} bg-white/15 backdrop-blur-md`}>
            <div className={`${styles.stackChild}`}>
                <h1>{title}</h1>
                <p className='text text-sm text-amber-800'>{subtitle}</p>
            </div>
            <p className="textWrapper">{description}</p>
        </div>
    )
}
