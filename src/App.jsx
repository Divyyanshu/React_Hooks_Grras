import React, { useState } from 'react'
import { Routes ,Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import Navbar from './components/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import Products from './pages/Products'
import UserReducerPage from './pages/userReducerPage'
import ProductsDetails from './pages/ProductsDetails'

// import CountryData from './components/CountryData'

const App = () => {
  const [post,setPost] = useState([])
  const [products, setProducts] = useState([])
  return (
    <>
   {/* <CountryData/> */}
     <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/blogs' element={<BlogPage post={post} setPost = {setPost}/>}/>
    <Route path='/blog/:id' element={<BlogPost post={post}/>}/>
    <Route path='/useReducer' element={<UserReducerPage/>}/>
    <Route path='/products' element={<Products products = {products} setProducts={setProducts}/>}/>
    <Route path='/products/:id' element={<ProductsDetails products = {products}/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
   </Routes>
   </>
  )
}

export default App