import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from '../useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const history = useHistory()
  const {data : blog , pending , error} = useFetch('http://localhost:8000/blogs/'+id) 

  const handleclick = ()=>{
    fetch('http://localhost:8000/blogs/'+blog.id,{
      method:'DELETE',

    }).then(()=>{
        history.push('/')
    })
  }
  return (
    <div className="blog-details">
      {pending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
      <article>
        <h2>{blog.title}</h2>
        <p>written by-{blog.author}</p>
        <div className="blog-body">{blog.body}</div>
        <button onClick={handleclick}>Delete</button>
      </article>)
      }
    </div>
  )
}

export default BlogDetails
