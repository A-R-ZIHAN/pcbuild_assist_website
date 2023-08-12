import { PostsContext } from "../contexts/postsContext"
import { useContext } from "react"

export const usePostsContext = () => {
  const context = useContext(PostsContext)

  if(!context) {
    throw Error('usePostsContext must be used inside a PostsContextProvider')
  }

  return context
}