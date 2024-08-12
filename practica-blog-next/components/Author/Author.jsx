import Paragraph from '@/components/Paragraph'
import styles from './Author.module.scss'

function Author({ name, avatarUrl = "https://i.pravatar.cc/100", avatarAlt = "Autor del post" }) {
    return (
        <div className={styles.author}>
            <img src={avatarUrl} alt={avatarAlt} />
            <Paragraph size="xs" weight="bold">{name}</Paragraph>
        </div>
    )
}

export default Author