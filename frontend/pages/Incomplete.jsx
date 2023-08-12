import { useEffect, useState } from "react"
import Posts from "../components/Posts"
import React from "react"
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext"
const Incomplete = ()=>{
  
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
  },[])
  return(
    <>  
    
    <div id="container">
    <div id="main-content">
     {posts && posts.map((post)=>(
         post.answer ? null : 

         <Posts key={post._id} post={post}/>
      

        
       ))}  
     </div>
    </div>
      
      
   
  
      
    </>
  )
}

export default Incomplete