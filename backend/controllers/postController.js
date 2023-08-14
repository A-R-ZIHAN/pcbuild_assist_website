const Post = require('../models/PostModel')
const mongoose = require('mongoose')

const getAllPosts = async (req,res)=>{
  try{
    const userId = req.user._id
    const post = await Post.find({userId:userId}).sort({createdAt:-1})
    res.status(200).json(post)
  }catch(error){
    res.status(400).json(error)
  }
}
const getAllPostsAdmin = async (req,res)=>{
  try{
    const post = await Post.find({}).sort({createdAt:-1})
    res.status(200).json(post)
  }catch(error){
    res.status(400).json(error)
  }
}

const getSinglePost = async (req,res)=>{
  const { id } = req.params
  try{
    const post = await Post.findOne({_id:id}).sort({createdAt:-1})
    res.status(200).json(post) 
  }catch(error){
    res.status(400).json(error)
  }
}

const createPost = async (req,res)=>{
  const {description, budget, purpose,answer } = req.body
  
  try{
    const userId = req.user._id
    const post = await Post.create({description,budget,purpose,answer,userId})
    res.status(200).json(post)
  }catch(error){
    res.status(400).json(error.message)
  }

}


const deletePost = async(req,res)=>{
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such post'})
  }

  const post = await Post.findOneAndDelete({_id: id})

  if(!post) {
    return res.status(400).json({error: 'No such post'})
  }

  res.status(200).json(post)
}

const updatePost = async(req,res)=>{
  const { id } = req.params
  const {description, budget, purpose,answer } = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such post'})
  }

  const post = await Post.findOneAndUpdate({_id: id},{description,budget,purpose,answer})

  if(!post) {
    return res.status(400).json({error: 'No such post'})
  }

  res.status(200).json(post)
}


module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
  getAllPostsAdmin
}