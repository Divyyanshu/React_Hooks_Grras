import React from 'react'
import { useParams } from 'react-router-dom'
const BlogPost = ({post}) => {
  const {id} = useParams()
  const filterOutput = post.filter((post) => {
   return post.id === parseInt(id);
  })
  console.log(filterOutput)
  return (
  <div>
    <h1>{filterOutput[0].body}</h1>
  </div>
  )
}

export default BlogPost