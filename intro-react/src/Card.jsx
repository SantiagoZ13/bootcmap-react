const Card = ({ title, text, children }) =>
    <div className="post">
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{children}</p>
    </div>

export default Card