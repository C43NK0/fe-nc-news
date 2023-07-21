import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css'
import ArticlesList from './components/ArticlesList'
import { Route, Routes } from 'react-router-dom'
import ArticleId from './components/ArticleId'
import CommentsList from './components/CommentsList'
import ArticleAndComments from './components/ArticleAndComments'

function App() {
  
  return (
      <main className='app-container'>
        <NavBar />
        <Header />
        
        
        <Routes>
          <Route path='/' element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticleId />}/>
          <Route path='/articles/:id/comments' element={<ArticleAndComments />} />
          
        </Routes>
        
      </main>
  )
}

export default App
