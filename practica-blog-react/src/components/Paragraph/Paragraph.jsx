import classNames from 'classnames'
import './Paragraph.scss'

function Paragraph({size = "sm", isHelpText, as, children}){
    const Component = as || "p"
    return (
        <Component className={classNames("paragraph", "font-regular",{
            "is-help-text": isHelpText,
            [`paragraph-${size}`]: size
        })}>
            {children}
        </Component>
    )
}

export default Paragraph