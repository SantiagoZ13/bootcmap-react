import classNames from 'classnames'
import { useState } from 'react'

import Paragraph from '@/components/Paragraph'

import styles from './TagsFilter.module.scss'


const Filter = ({ children, isActive, href = "#", onClick}) =>{
    return (
        <li className={classNames({
            [styles["is-active-filter"]]: isActive
        })}>
            <a className={classNames(styles.filter)} href={href} onClick={event =>{
                event.preventDefault()
                onClick(children)
            }}>
                <Paragraph as="span" size="sm" weight="bold">
                {children}
                </Paragraph>
            </a>
            
        </li>
    )
}

function TagsFilter({filters = []}){
    const [firstFilter] = filters
    const [activeFilter, setActiveFilter] = useState(firstFilter.name)

    return (
        <nav className={styles['tags-filter']}>
        <div className='filter-list-scroll-hider'>
            <ul className="nav-list filter-list">
                {filters.map(({name, href}) => <Filter href={href} isActive={activeFilter === name} onClick={setActiveFilter}>{name}</Filter>)}
            </ul>
        </div>
        <input className="input" type="search" placeholder="Buscar" />
    </nav>
    )   
}

export default TagsFilter