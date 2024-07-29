import { Component } from 'react'
import './App.css'
import Card from './Card'

export default class App extends Component{
  render(){
    return (
      <>
        <Card title="Oi mundo" text="olá visitante">
          Portugues
        </Card>
        <Card title="Bonjour le monde" text="Salut visiteur">
          <Card title="Chat 😸" text="Chien 🐶">
            Cheval 🐴
          </Card>
        </Card>
      </>
    )
  }
}
