import './Author.scss'

function Author({ name, avatarUrl = "https://i.pravatar.cc/100", avatarAlt = "Autor del post" }) {
    return (
        <div className="author">
            <img src={avatarUrl} alt={avatarAlt} />
            <span className="paragraph paragraph-xs font-bold">{name}</span>
        </div>
    )
}

export default Author