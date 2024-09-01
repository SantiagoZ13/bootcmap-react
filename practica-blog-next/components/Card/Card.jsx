import classNames from 'classnames'

import Tag from '@/components/Tag'
import Author from '@/components/Author'
import Time from '@/components/Time'
import Paragraph from '@/components/Paragraph'
import Heading from '@/components/Heading'

import styles from './Card.module.scss'

function Card({unsplashID, unsplashAlt, tags, title, extract, date, author, readTime, isExtended = false, isReversed = false}) {
    return (
        <article className={classNames(styles.card, {
            [styles["is-extended"]]: isExtended,
            [styles["is-reversed"]]: isReversed
        })}>
        <img src={`https://images.unsplash.com/${unsplashID}`} alt={unsplashAlt} />
        <section>
            <header>
                <div className={styles["card-tags"]}>
                    {tags.map((tag)=> {
                        return <Tag isExtended={isExtended}>{tag}</Tag>
                        })
                    }
                </div>
                <Heading>{title}</Heading>
                
                <Time>{date}</Time>
            </header>
            <Paragraph>{extract}</Paragraph>
            <footer>
                <Author name={author}></Author>
                <Paragraph size='xs' isHelpText as="span">{readTime}</Paragraph>
            </footer>
        </section>

    </article>
    )
}
export default Card