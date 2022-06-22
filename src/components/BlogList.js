import React from 'react'

export default function BlogList({blog,handleDelete}) {

 return (
    <div className= 'home' >
    {blog.map(blogs=>(
      <>
      <div className="blog-preview" key={blogs.id}>
      <h1>{blogs.title}</h1>
      <p>{blogs.body}</p>
      <p>{blogs.Author}</p> 
      <button onClick={()=>handleDelete(blogs.id)}>Delete</button>
      </div>
      </>
    ))}
  </div>
  )
    }
