const express = require('express')
const router = express.Router()
const Post = require('../models/PostModel')
const mongoose = require('mongoose')
const {getAllPosts,getSinglePost, createPost, deletePost, updatePost} = require('../controllers/postController')
const requireAuth = require('../middlewares/requireAuth')

router.use(requireAuth)

router.get('/',getAllPosts)


router.get('/:id',getSinglePost)


router.post('/', createPost)

router.delete('/:id',deletePost)

router.patch('/:id',updatePost)

module.exports = router