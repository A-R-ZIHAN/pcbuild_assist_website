require('dotenv').config()

const express = require('express')
const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



//middleware
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})


//routes
app.use('/api/posts',postRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGO_URI,{dbName: 'pc_building_app'}).then(()=>{
 // listen for requests
      app.listen(process.env.PORT,()=>{
        console.log('listening to port ',process.env.PORT)
      })
}).catch((err)=>{
 console.log(err)
})



