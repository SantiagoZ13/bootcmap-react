import './Button.scss'
import classnames from 'classnames'

function Button ({ children, type, onClick }){

    return(
        <li><button onClick={onClick} className={classnames("button",{
            [`button-${type}`]: type
        })}>{children}</button></li>
    )
}

export default Button