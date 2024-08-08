import classNames from 'classnames'
import './Tag.scss'

function Tag({children, link = '#', isExtended}){
    return(
        <span className={classNames("tag",{
            "tag-primary": !isExtended,
            "tag-secondary": isExtended
            
        })}>
            <a href={link}>{children}</a>
            
        </span>
    )
}

export default Tag