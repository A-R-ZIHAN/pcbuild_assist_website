import {NavLink} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = ()=>{
  const {user} = useAuthContext()
  const {logout} = useLogout()
  const handleClick = ()=>{
    logout()
  }

  return(
    <header className='header'>
    <NavLink className='logo' to={'/'}>BUILD ASSIST</NavLink>  
   
    <nav id="nav">
          

            
          {user && (
            <>
             <NavLink to={'/post'}>Create Post</NavLink>
             <NavLink to={'/'}>ALL</NavLink>
             <NavLink to={'/completed'}>COMPLETED</NavLink>
             <NavLink to={'/incomplete'}>INCOMPLETE</NavLink>
            {user.isAdmin && (<NavLink to={'/admin'}>ADMIN</NavLink>)} 
             <button onClick={handleClick}>Logout</button>
            </>
          )}
          {!user && (
            <>
              <NavLink to={'/login'}>Login</NavLink>
              <NavLink to={'/signup'}>Sign up</NavLink>
            </>
          )}

            
            

          
 
            

    </nav>
    </header>
  )
}

export default Navbar