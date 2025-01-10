//import { useState } from 'react'
import './App.css'
import Header from '@/components/header'
import Article from '@/components/article'
import Reactions from '@/components/reactions'
import Comments from '@/components/comments'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Article />
      <Reactions />
      <Comments />
    </>
  )
}

export default App
