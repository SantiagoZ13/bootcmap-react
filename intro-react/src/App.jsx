import { Component } from 'react'
import './App.css'
import Card from './Card'
import Button from './Button'
import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'

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
        <CounterFunction></CounterFunction>
      </>
    )
}
