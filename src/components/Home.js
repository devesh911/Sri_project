import React, { useState,useEffect } from 'react'
import BlogList from './BlogList'

export default function Home() {

const[name,setname] = useState(null)
const[blog,setBlogs] = useState(null);
const[pending , setPending] = useState(true);
const[error , setError ] = useState(null)


  // const  deleteBlog = (id) =>{
  //   const newList = blog.filter(blogs=> blogs.id !== id)
  //   setBlogs(newList);
  // }
  useEffect(()=>{
  setTimeout(()=>{  fetch('http://localhost:8000/blogs')
  .then(res=>{
    if(!res.ok){
      throw Error('could not fetch data ')
    }
    console.log(res)
    return res.json();
  })
  .then(data=>{
    console.log(data);
    setBlogs(data);
    setPending(false);
    setError(null);
  })

    .catch(err =>{
      setPending(false);
      setError(err.message);
    }
      
    )
    },2000)
    
  },[]);
  return (
    <div className= 'home' >
      {/* <BlogList blog = {blog}/> */}
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {blog && <BlogList blog = {blog} title="Devesh blog" />}
      {/* <button onClick={()=>{setname('luigi')}}>change name</button> */}
    </div>
  );
}
