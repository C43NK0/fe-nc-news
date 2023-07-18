import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css'
import ArticlesList from './components/ArticlesList'

function App() {
  
  return (
    <>
      <div className='app-container'>
        <NavBar />
        <Header />
        <ArticlesList />
        
      </div>
    </>
  )
}

export default App
