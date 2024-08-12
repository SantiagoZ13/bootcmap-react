import classNames from 'classnames'

import styles from './Button.module.scss'


function Button ({ children, type, onClick }){

    return(
        <li>
            <button onClick={onClick} className={classNames(styles.button,{
                [styles[`button-${type}`]]: type
                })}
            >
                {children}
            </button>
        </li>
    )
}

export default Button