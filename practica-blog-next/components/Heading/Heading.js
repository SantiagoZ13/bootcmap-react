import styles from "./Heading.module.scss" 
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Heading({ children }){
    return(
        <h2 className={cx("heading", "heading-sm", "font-bold")}>{children}</h2>
    )
}

export default Heading