const express = require('express')
require('./db/mongoose')
const bodyParser = require('body-parser')

const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT

// app.use((req,res,next) =>{
//     res.status(503).send('Site is Under maintenance')
// })

app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('port running on '+ port)
})



