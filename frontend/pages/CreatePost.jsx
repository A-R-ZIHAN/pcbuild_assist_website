import { useState,useEffect } from "react";
import {useSearchParams, Navigate} from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

const CreatePost = ()=>{
  const [description,setDescription] = useState('')
  const [post,setPost] = useState(null)
  const [budget,setBudget] = useState(10000)
  const [purpose,setPurpose] = useState('')
  const [answer,setAnswer] = useState('')
  const [parameters] = useSearchParams()
  const id = parameters.get('id')
  const {user} = useAuthContext()

  useEffect(()=>{
    const fetchPost = async ()=>{
    
      if(id){
        const response = await fetch(`http://localhost:4000/api/posts/${id}`,{
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
        if(response.ok){
          setPost(json)
        
          }
          
         }
        
      }
      if (user) {
        fetchPost()
      }
      
  },[])
  

  const updatePost = async ()=>{
    const post = {answer}
    
    
      const response = fetch(`http://localhost:4000/api/posts/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(post),
      headers:{
        'Content-type':'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if(response.ok){
      setDescription('')
      setBudget('')
      setPurpose('')
     
    }else{
      console.log(json.error)
    }
    
    
  }


  const handleSubmit = async (e)=>{
    const post = {description, budget, purpose}
    const response = fetch('http://localhost:4000/api/posts/',{
      method: 'POST',
      body: JSON.stringify(post),
      headers:{
        'Content-type':'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if(response.ok){
      setDescription('')
      setBudget('')
      setPurpose('')
    }else{
      console.log(json.error)
    }
  }
  return(
    <>
      <form id="createPostForm" action={id?"/completed":"/incomplete" } onSubmit={id?updatePost:handleSubmit}>
        <label>Description: </label>
        <input 
        type="text" 
        onChange={e=>setDescription(e.target.value)}
        value={id&&post?post.description:description}
        /> <br />

        <label>Budget: </label>
        <select 
          onChange={e=>setBudget(e.target.value)}
          value={id&&post?post.budget:budget}
        >
          <option value={budget}>10k</option>
          <option value="20000">20k</option>
          <option value="30000">30k</option>
          <option value="40000">40k</option>
        </select><br />

        <label>Purpose: </label>
        <input 
          value={id&&post?post.purpose:purpose}
          type="text" 
          onChange={e=>setPurpose(e.target.value)}
        />
        <br />

        <input 
          style={id?{}:{display:"none"}}
          type="text" 
          value={answer}
          onChange={e=>setAnswer(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}


export default CreatePost;