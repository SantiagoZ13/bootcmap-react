import './App.css'
import Card from './Card.jsx'

function App() {

  const allCards = [
    {
      title: "Card 1",
      text: "lorem impsu dolet sit 1"
    },
    {
      title: "Card 2",
      text: "lorem impsu dolet sit 2"
    },
    {
      title: "Card 3",
      text: "lorem impsu dolet sit 3"
    }
  ]
  return (
    <>
      {allCards.map(({title, text}) => <Card title={title} text={text}></Card>
      )}
    </>
  )
}

export default App
