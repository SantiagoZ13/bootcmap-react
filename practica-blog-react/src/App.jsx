import Card from './components/Card/Card'
import Button from './components/Button'
import Link from './components/Link'
import TagsFilter from './components/TagsFilter'
import articles from './data/articles.json'
import filters from './data/filters.json'

function App() {
  return (
    <>
      <div className="main-container">
        <header className="main-header">
          <img src="/images/logos/undefined-shell.svg" alt="logo de undefined shell" />
          <nav>
            <ul className="nav-list">
              <Link isActive={true}>Inicio</Link>
              <Link>Suscribete</Link>
              <Button type="primary">Undefined Academy</Button>
              <Button type="secondary">Discord</Button>
            </ul>
          </nav>
        </header>
        <main>
          <section className="featured-post">
            <article>


            </article>

            <div className="button-container">
              <button>Adelante<img src="/images/icons/flechaleft.png" /></button>
              <button>Atras<img src="/images/icons/flecha.png" /></button>
            </div>
          </section>
          <section className="post-list-container">
            <TagsFilter filters={filters} />
            <div className="post-list">
              {articles.map((article, index) =>{
                const isExtended = (index + 1) % 4 === 0
                const isReversed = (index + 1) % 8 === 0

                return <Card {...article} isExtended={isExtended} isReverse={isReversed}></Card>

            })}
            </div>

          </section>
        </main>
      </div>

      <footer>

      </footer>
    </>
  )
}

export default App
