import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList({ blog, handledelete }) {

  return (
    <div className='blog-list' >
      <h2>All Blogs!</h2>
      {blog.map(blogs => (
        <>
          <div className="blog-preview" key={blogs.id}>
            <Link to={`/blog/${blogs.id}`}>
              <h2>{blogs.title}</h2>
              <p>{blogs.author}</p>
            </Link>

            {/* <button onClick={()=>handleDelete(blogs.id)}>Delete</button> */}
          </div>
        </>
      ))}
    </div>
  )
}
