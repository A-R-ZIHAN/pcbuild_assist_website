import {Link} from 'react-router-dom'
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from '../hooks/useAuthContext'

const Posts = ({post})=>{
  const {dispatch} = usePostsContext()
  const {user} = useAuthContext()  
  const isAdmin = user.isAdmin
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
  <div className='post-container'>
    <div id="post">       
        <h1>{post.budget}</h1>
        <h3>{post.description}</h3>
        <p>Purpose: {post.purpose}</p>
        <p style={{color:post.answer ? 'green' : 'red'}}>Status: {post.answer ? 'Completed' : 'Incomplete'}</p>
        {post.answer && (
          <>
            <button>
            <Link to={`/post/${post._id}`}>
            View Answer
            </Link>
            </button>
          </>
        )}
        
        {!post.answer && isAdmin ? (
          <>
           <button>
               <Link  to={`/post?id=${post._id}`}> Answer </Link> 
           </button>
          </>
        ): <></>}
       
        <button id='postDeleteBtn' onClick={handleClick}>Delete</button>
    </div>
  </div>
  )
}

export default Posts