import classNames from 'classnames'
import { useState } from 'react'
import './TagsFilter.scss'


const Filter = ({ children, isActive, href = "#", onClick}) =>{
    return (
        <li className={classNames({
            "is-active-filter": isActive
        })}>
            <a className='filter paragraph paragraph-sm font-bold' href={href} onClick={event =>{
                event.preventDefault()
                onClick(children)
            }}>
                {children}
            </a>
        </li>
    )
}

function TagsFilter({filters = []}){
    const [firstFilter] = filters
    const [activeFilter, setActiveFilter] = useState(firstFilter.name)
    return (
        <nav className='tags-filter'>
        <div className='filter-list-scroll-hider'>
            <ul className='nav-list filter-list'>
                {filters.map(({name, href}) => <Filter href={href} isActive={activeFilter === name} onClick={setActiveFilter}>{name}</Filter>)}
            </ul>
        </div>
        <input className="input" type="search" placeholder="Buscar" />
    </nav>
    )   
}

export default TagsFilter