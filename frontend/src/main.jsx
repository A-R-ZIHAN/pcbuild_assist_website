import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { PostsContextProvider } from '../contexts/postsContext.jsx'
import { AuthContextProvider } from '../contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </AuthContextProvider>
    </PostsContextProvider>
  </React.StrictMode>,
)
