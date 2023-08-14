const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  description:{
    type:String,
    required:true
  },
  budget:{
    type:Number,
    required:true
  },
  purpose:{
    type:String,
    required: true
  },
  answer:{
    type:String,
  },
  userId:{
    type:String,
    required: true 
  }

}, {timestamps:true})


module.exports = mongoose.model('Post',postSchema)