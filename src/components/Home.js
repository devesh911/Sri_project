import React, { useState } from 'react'
import BlogList from './BlogList'

export default function Home() {

const[blog , setBlogs] =   useState([
     {title: 'My new website' , body :'Lorem....' , Author:'Devesh' , id :'1'},
      {title: 'My new app' , body :'Lorem 2....' , Author:'aman' , id :'2'} 
]
  )

  return (
    <div className= 'home' >
      <BlogList blog = {blog}/>
    </div>
  );
}
