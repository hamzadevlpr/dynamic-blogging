import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Footer from './Components/Footer'
import Profile from './Components/Profile'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './Components/ErrorPage'
import 'react-toastify/dist/ReactToastify.css';
import IndexPage from './Components/Blog/IndexPage'
import CreatePost from './Components/Blog/CreatePost'
import Navbar from './Components/Blog/Navbar'
import Article from './Components/Blog/Article'
// import 'animate.css';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/login' element={<Login title='Welcome Back' />} />
        <Route path='/signup' element={<Signup title='Registration' />} />
        <Route index path='/blogs' element={<IndexPage />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/*' element={<ErrorPage body="The page you are looking for doesn't exist or <br /> has been removed." />} />
      </Routes>
      <Footer />
      <ToastContainer
        autoClose={5000}
        pauseOnHover={false}
        draggable={false}
        hideProgressBar={true}
      />
    </>
  )
}

export default App