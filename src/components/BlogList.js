import React from 'react'

export default function BlogList(props) {
     const blog = props.blog;
 return (
    <div className= 'home' >
    {blog.map((blog)=>(
      <div className="blog-prevview">
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <p>{blog.Author}</p>
      </div>
      
    ))}
  </div>
  )
}
