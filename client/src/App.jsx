import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Register from './Register'
import Layout from './Layout'
import Post from './Post'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Post />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>


      </Routes>
    </>
  )
}

export default App
