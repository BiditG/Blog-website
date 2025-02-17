import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';
import SideNav from './components/SideNav';
import CategoryPage from './pages/CategoryPage';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<SinglePost/>}/>
          <Route path='/side-nav' element={<SideNav/>}/>
          <Route path='/category/:category' element={<CategoryPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
