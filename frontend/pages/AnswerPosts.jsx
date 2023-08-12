import { useEffect,useState } from "react"
import {useLocation} from 'react-router-dom'
import { useAuthContext } from "../hooks/useAuthContext"

const AnswerPosts = ()=>{
  const [posts,setPosts] = useState(null)
  const location = useLocation()
  const id = location.pathname.split("/").pop()
  const {user} = useAuthContext()
  useEffect(()=>{
    
    const fetchPost = async ()=>{
      const response = await fetch(`http://localhost:4000/api/posts/${id}`,{
        headers: {'Authorization': `Bearer ${user.token}`}
      })
        const json = await response.json()
        if(response.ok){
          setPosts(json)
        }
    }

    fetchPost()
  },[])
  return(
    <>
     {posts && posts.map((post)=>(
      <>
      <div >
        <h1 key={post._id}>Description: {post.description}</h1>
        <h4>Purpose: {post.purpose}</h4>
        <h4>Budget: {post.budget}</h4>
        <h1>Answer: {post.answer}</h1>
      </div>
        
      </>
     ))}
    </>
  )
}


export default AnswerPosts