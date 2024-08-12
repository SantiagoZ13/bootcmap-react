import classNames from 'classnames'

import Tag from '../Tag'
import Author from '../Author'
import Time from '../Time'
import Paragraph from '../Paragraph'

import styles from './Card.module.scss'

function Card({unsplashID, unsplashAlt, tags, title, extract, date, author, readTime, isExtended = false, isReversed = false}) {
    return (
        <article className={classNames(styles.card, {
            [styles["is-extended"]]: isExtended,
            [styles["is-reverse"]]: isReversed
        })}>
        <img src={`https://images.unsplash.com/${unsplashID}`} alt={unsplashAlt} />
        <section>
            <header>
                <div>
                    {tags.map((tag)=> {
                        return <Tag isExtended={isExtended}>{tag}</Tag>
                        })
                    }
                </div>
                <h2 className="heading heading-sm font-bold">{title}</h2>
                
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