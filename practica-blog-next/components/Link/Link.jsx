import classNames from 'classnames'
import styles from './Link.module.scss'

function Link({ children, href = "#", isActive }){
    return (
        <li>
            <a href={href} className={classNames(styles["text-button"], styles["text-button-md"], "font-bold",{
                "is-active": isActive
            })}>
                {children}
            </a>
        </li>
    )
}
export default Link