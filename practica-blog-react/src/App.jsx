import Card from './Card'

function App() {

  const articles = [
    {
      unsplashID:"photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      author:"Guillermo Rodas",
      date:"2024-08-1"
    },
    {
      unsplashID:"photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      unsplashAlt:"Web Components",
      title:"Evolución de las Arquitecturas y Metodologías de CSS",
      extract:"Las Arquitecturas de CSS nos ayudan a escalar y mantener nuestras hojas de estilo en el tiempo. Estas son necesarias porque, el CSS, al carecer de un sistema de módulos conveniente y debido a su naturaleza...",
      author:"Guillermo Rodas",
      date:"2024-08-1"
    }
  ]

  return (
    <>
      <div className="main-container">
        <header className="main-header">
          <img src="/images/logos/undefined-shell.svg" alt="logo de undefined shell" />
          <nav>
            <ul className="nav-list">
              <li><a href="#" className="text-button text-button-md font-bold is-active">Inicio</a></li>
              <li><a href="#" className="text-button text-button-md font-bold">Suscribete</a></li>
              <li><button className="button button-primary">Undefined Academy</button></li>
              <li><button className="button button-secondary">Discord</button></li>
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
            <div className="post-list">
              {articles.map((article) => <Card {...article} ></Card>)}
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
