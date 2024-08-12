import classNames from 'classnames'
import styles from './Paragraph.module.scss'

function Paragraph({size = "sm", isHelpText, as, children, weight = "regular"}){
    const Component = as || "p"
    return (
        <Component className={classNames("paragraph",{
            [styles["is-help-text"]]: isHelpText,
            [styles[`paragraph-${size}`]]: size,
            [styles[`font-${weight}`]]: weight
        })}>
            {children}
        </Component>
    )
}

export default Paragraph