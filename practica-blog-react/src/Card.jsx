function Tag({children, link = '#'}){
    return(
        <span className="tag tag-primary">
            <a href={link}>{children}</a>
        </span>
    )
}

function Card({unsplashID, unsplashAlt, title, extract, author, date}) {
    return (
        <article className="card">
        <img src={`https://images.unsplash.com/${unsplashID}`} alt={unsplashAlt} />
        <section>
            <header>

                <div className="tags">
                    <Tag>Web Components</Tag>
                    <Tag>CSS</Tag>
                    
                </div>
                <h2 className="heading heading-sm font-bold">{title}</h2>
            </header>
            <p className="paragraph paragraph-sm font-regular">{extract}</p>
            <footer>
                <div className="author">
                    <img src="https://i.pravatar.cc/100" alt="Autor del post" />
                    <span className="paragraph paragraph-xs font-bold">{author}</span>
                </div>
                <time className="help-text paragraph paragraph-xs font-regular" dateTime={date}>
                    {date}
                </time>
            </footer>
        </section>

    </article>
    )
}
export default Card