import classNames from 'classnames'
import './Card.scss'
import Tag from '../Tag'
import Author from '../Author'

function Card({unsplashID, unsplashAlt, tags, title, extract, date, author, readTime, isExtended = false, isReversed = false}) {
    return (
        <article className={classNames("card", {
            "is-extended": isExtended,
            "is-reverse": isReversed
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
                
                <time className="help-text paragraph paragraph-xs font-regular" dateTime={date}>
                    {date}
                </time>
            </header>
            <p className="paragraph paragraph-sm font-regular">{extract}</p>
            <footer>
                <Author name={author}></Author>
                <p className="help-text paragraph paragraph-xs font-regular">{readTime}</p>
            </footer>
        </section>

    </article>
    )
}
export default Card