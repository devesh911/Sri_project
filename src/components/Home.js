import React from 'react'
import useFetch from '../useFetch';
import BlogList from './BlogList'

export default function Home() {

  const {data :blog , pending , error} = useFetch('http://localhost:8000/blogs')

  // const  deleteBlog = (id) =>{
  //   const newList = blog.filter(blogs=> blogs.id !== id)
  //   setBlogs(newList);
  // }
 
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
