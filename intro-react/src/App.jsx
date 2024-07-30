import { Component } from 'react'
import './App.css'
import Card from './Card'

export default function App(){
  const cards = [
    {
      title: "Oi mundo",
      text: "olá visitante"
    },
    {
      title: "Bonjour le monde",
      text: "Salut visiteur"
    },
    {
      title: "Chat 😸 et Chien 🐶",
      text: "Cheval"
    }
  ]
    return (
      <>
        {cards.map(({title, text})=> <Card title={title} text={text}></Card> )}
      </>
    )
}
