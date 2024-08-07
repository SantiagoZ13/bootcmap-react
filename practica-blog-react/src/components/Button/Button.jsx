import classNames from 'classnames'
import './Button.scss'


function Button ({ children, type, onClick }){

    return(
        <li>
            <button onClick={onClick} className={classNames("button",{[`button-${type}`]: type})}>
                {children}
            </button>
        </li>
    )
}

export default Button