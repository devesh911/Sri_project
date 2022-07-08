import React, { useState } from 'react'
import { useHistory } from 'react-router';


export default function Create() {
  const [title , setTitle] = useState('');
  const [body , setBody] = useState('');
  const [author , setAuthor] = useState('mario');
  const [isPending , setisPending] = useState(false);
  const history = useHistory();

  const handleSubmit  = (e) =>{
    e.preventDefault();
    const blog = {title, body, author}; 
    setisPending(true);
    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers:{"Content-Type":"application/json"},
      body : JSON.stringify(blog)

    }).then(()=>{
      setisPending(false);
      console.log('new blog added')
      history.push('/')
    })

  }
  
  return (
    <div className="create">
      <h2>Create a new BLOG!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
         <input 
         type = "text"
         value= {title}
         onChange = {(e)=>{
          setTitle(e.target.value)
        }}
         required
         />
         <label>Blog body:</label>
         <textarea 
         required
         value = {body}
         onChange={(e)=>{
           setBody(e.target.value)
         }}
         >
           
         </textarea>
         <label>Blog author:</label>
         <select
         value = {author}
         onChange={(e)=>{
           setAuthor(e.target.value);
         }}
         >
           <option value="mario">mario</option>
           <option value="luigi">luigi</option>
         </select>
         {!isPending && <button>Create</button>}
         { isPending && <button>Adding blog...</button>}
         <p>{title}</p>
         <p>{body}</p>
         <p>{author}</p>

      </form>
      
    </div>
  )
}
