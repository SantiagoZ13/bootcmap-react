import classNames from 'classnames'
import './Tag.scss'

function Tag({children, link = '#', type = "primary"}){
    return(
        <span className={classNames("tag",{
            [`tag-${type}`]: type
        })}>
            <a href={link}>{children}</a>
        </span>
    )
}

export default Tag