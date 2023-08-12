import {Link} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = ()=>{
  const {user} = useAuthContext()
  const {logout} = useLogout()
  const handleClick = ()=>{
    logout()
  }

  return(
    <nav id="nav">
          <h1>BUILD ASSIST</h1>
          <ul>
            <li><h4><Link to={'/post'}>Create Post</Link></h4></li>
          {user && (
              <li><h4><button onClick={handleClick}>Logout</button></h4></li>
          )}
          {!user && (
            <>
              <li><h4><Link to={'/login'}>Login</Link></h4></li>
              <li><h4><Link to={'/signup'}>Sign up</Link></h4></li>
            </>
          )}
            

          
          </ul>
          <div id="left-sidebar">
            <ul>
            <li><Link to={'/'}>ALL</Link></li>
            <li><Link to={'/completed'}>COMPLETED</Link></li>
            <li><Link to={'/incomplete'}>INCOMPLETE</Link></li>
           </ul>
          </div>
    </nav>
  )
}

export default Navbar