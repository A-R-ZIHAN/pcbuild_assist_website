import { useEffect, useState } from "react"
import Posts from "../components/Posts"
import React from "react"
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext"

  


export const Home = ()=>{
  const {posts,dispatch} = usePostsContext()
  const {user} = useAuthContext()
  useEffect(()=>{
    
    const fetchPost = async ()=>{
        const response = await fetch('http://localhost:4000/api/posts/',{
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
        if(response.ok){
          dispatch({type:"SET_POSTS",payload:json})
          
        }
       
    }
    if (user) {
      fetchPost()
    }
    
  },[dispatch,user])
  return(
    <>  
    <div className="grid-container">
    
      {posts && posts.map((post)=>(
        <Posts key={post._id} post={post}/>
     ))}
    </div>
   </>
  )
}

export const Incomplete = ()=>{
  const {posts,dispatch} = usePostsContext()
  const {user} = useAuthContext()
  useEffect(()=>{
    
    const fetchPost = async ()=>{
        const response = await fetch('http://localhost:4000/api/posts/',{
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
        if(response.ok){
          dispatch({type:"SET_POSTS",payload:json})
          
        }
       
    }
    if (user) {
      fetchPost()
    }
    
  },[dispatch,user])
  return(
    <>  
    
    <div className="grid-container">
 
     {posts && posts.map((post)=>(
         post.answer ? null : 

         <Posts key={post._id} post={post}/>
      

        
       ))}  
    </div>
    </>
  )
}


export const Completed = ()=>{
  const {posts,dispatch} = usePostsContext()
  const {user} = useAuthContext()
  useEffect(()=>{
    
    const fetchPost = async ()=>{
        const response = await fetch('http://localhost:4000/api/posts/',{
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
        if(response.ok){
          dispatch({type:"SET_POSTS",payload:json})
          
        }
       
    }
    if (user) {
      fetchPost()
    }
    
  },[dispatch,user])
  return(
    <>  
    
    <div className="grid-container">
      {posts && posts.map((post)=>(
         post.answer ? <Posts key={post._id} post={post}/> : null
        
       ))}
    </div>
  </>
  )
}

export const Admin = ()=>{
  const {posts,dispatch} = usePostsContext()
  const {user} = useAuthContext()
  useEffect(()=>{
    
    const fetchPost = async ()=>{

        const response = await fetch('http://localhost:4000/api/posts/admin',{
          headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
        if(response.ok){
          dispatch({type:"SET_POSTS",payload:json})
          
        }
       
    }
    if(user.isAdmin){
      fetchPost()
    }
      
    
    
  },[dispatch,user])
  return(
    <>  
    
    <div className="grid-container">
      {posts && posts.map((post)=>(
         <Posts key={post._id} post={post}/>
        
       ))}
    </div>
  </>
  )
}
