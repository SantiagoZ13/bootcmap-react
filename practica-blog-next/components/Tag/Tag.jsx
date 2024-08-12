import classNames from 'classnames'
import styles from './Tag.module.scss'

function Tag({children, link = '#', isExtended}){
    return(
        <span className={classNames(styles.tag,{
            [styles["tag-primary"]]: !isExtended,
            [styles["tag-secondary"]]: isExtended
            
        })}>
            <a href={link}>{children}</a>
            
        </span>
    )
}

export default Tag