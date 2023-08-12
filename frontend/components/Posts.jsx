import {Link} from 'react-router-dom'
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from '../hooks/useAuthContext'

const Posts = ({post})=>{
  const {dispatch} = usePostsContext()
  const {user} = useAuthContext()  
  
  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/posts/' + post._id, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${user.token}`}
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type:'DELETE_POST',payload:json})
    }
  }
  return(
  
  <div id="post">
        <button onClick={handleClick}>Delete</button>
        <h1>Budget: {post.budget} taka</h1>
        <h3>{post.description}</h3>
        <p>Purpose: {post.purpose}</p>
        <p style={{color:post.answer ? 'green' : 'red'}}>Status: {post.answer ? 'Completed' : 'Incomplete'}</p>
        <button style={{display:post.answer?'':'none'}}>
            <Link to={`/post/${post._id}`}>
            View Answer
            </Link>
          </button>
          <button style={{display:post.answer?'none':'', color:'red'}}>
               <Link  to={`/post?id=${post._id}`}> Answer </Link> 
          </button>


     
  </div>
  )
}

export default Posts