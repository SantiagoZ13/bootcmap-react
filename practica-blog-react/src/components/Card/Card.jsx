import classNames from 'classnames'
import Tag from '../Tag'
import './Card.scss'


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
                        return <Tag>{tag}</Tag>
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
                <div className="author">
                    <img src="https://i.pravatar.cc/100" alt="Autor del post" />
                    <span className="paragraph paragraph-xs font-bold">{author}</span>
                </div>
                <p className="help-text paragraph paragraph-xs font-regular">{readTime}</p>
            </footer>
        </section>

    </article>
    )
}
export default Card