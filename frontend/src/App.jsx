import Navbar from "../components/Navbar";

import {Routes,Route,Navigate} from 'react-router-dom';
import {Home,Completed,Incomplete} from '../pages/Home'


import CreatePost from "../pages/CreatePost";
import AnswerPosts from "../pages/AnswerPosts";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useAuthContext } from "../hooks/useAuthContext";

function App() {
  const { user } = useAuthContext()

  return (
    <>
    <Navbar/>
     
     <div className="pages">
      <Routes>
        <Route 
          path='/' 
          element={user ? <Home/> :  <Navigate to="/login"/>}
        />
        <Route 
          path='/completed' 
          element={user ? <Completed/> :  <Navigate to="/login"/>}
        />
        <Route 
          path='/incomplete' 
          element={user ? <Incomplete/> :  <Navigate to="/login"/>}
        />
        <Route 
          path='/post' 
          element={user ? <CreatePost/> :  <Navigate to="/login"/>}
        />
        <Route 
          path='/post/:id' 
          element={user ? <AnswerPosts/> :  <Navigate to="/login"/>}
        />
        <Route 
          path="/login" 
          element={!user ? <Login/>: <Navigate to="/" />} 
        />
        <Route 
          path="/signup" 
          element={!user ? <Signup/> : <Navigate to="/" />} 
        />
      </Routes>
     </div>
    </>
  )
}

export default App
