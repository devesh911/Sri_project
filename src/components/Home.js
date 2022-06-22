import React, { useState } from 'react'
import BlogList from './BlogList'

export default function Home() {

const[blog , setBlogs] =   useState([
     {title: 'My new website' , body :'Lorem....' , Author:'devesh' , id :1},
      {title: 'My new app' , body :'Lorem 2....' , Author:'aman' , id :2},
      {title: 'My new sOcialmedia' , body :'Lorem 3....' , Author:'devesh' , id :3} 
]
  )
  const  deleteBlog = (id) =>{
    const newList = blog.filter(blogs=> blogs.id !== id)
    setBlogs(newList);
  }

  return (
    <div className= 'home' >
      {/* <BlogList blog = {blog}/> */}
      <BlogList blog = {blog.filter(blogs=>blogs.Author==='devesh')} title="Devesh blog" handleDelete = {deleteBlog}/>
    </div>
  );
}
