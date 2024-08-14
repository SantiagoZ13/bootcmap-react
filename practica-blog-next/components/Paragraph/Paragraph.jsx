import classNames from 'classnames'
import styles from './Paragraph.module.scss'

function Paragraph({size = "sm", isHelpText, as, children, weight = "regular"}){
    const Component = as || "p"
    return (
        <Component className={classNames(styles.paragraph, "font-regular", {
            [styles["is-help-text"]]: isHelpText,
            [styles[`paragraph-${size}`]]: size,
        })}>
            {children}
        </Component>
    )
}

export default Paragraph