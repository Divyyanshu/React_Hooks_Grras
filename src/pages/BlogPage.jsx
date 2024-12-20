import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const BlogPage = ({post ,setPost}) => {
  const {name} = useContext(DataContext);
  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts?_limit=100").then((data)=>{
    setPost(data.data)
     })
  },[])
  return (
<div>
  <h1 className='text-center text-5xl font-semibold py-10 underline'>
    Blogs
  </h1>
  <h2>{name}</h2>
  {
    post.map((post)=>(
      <Link to={`/blog/${post.id}`} className='text-center font-medium block hover:underline text-lg hover:text-red-500'>{post.title}</Link>
    ))
  }
</div>
  )
}

export default BlogPage