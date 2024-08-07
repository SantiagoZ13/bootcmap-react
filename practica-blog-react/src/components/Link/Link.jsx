import classNames from 'classnames'
import './Link.scss'

function Link({ children, href = "#", isActive }){
    return (
        <li>
            <a href={href} className={classNames("text-button text-button-md font-bold",{
                "is-active": isActive
            })}>
                {children}
            </a>
        </li>
    )
}
export default Link