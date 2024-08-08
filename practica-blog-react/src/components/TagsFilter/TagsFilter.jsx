import classNames from 'classnames'
import './TagsFilter.scss'

const Filter = ({ children, isActive, href = "#"}) =>{
    return (
        <li className={classNames({
            "is-active-filter": isActive
        })}>
            <a className='filter paragraph paragraph-sm font-bold' href={href}>
                {children}
            </a>
        </li>
    )
}

function TagsFilter({filters}){
    return (
        <nav className='tags-filter'>
        <div className='filter-list-scroll-hider'>
            <ul className='nav-list filter-list'>
                {filters.map(({name, href}) => <Filter href={href}>{name}</Filter>)}
            </ul>
        </div>
        <input className="input" type="search" placeholder="Buscar" />
    </nav>
    )   
}

export default TagsFilter