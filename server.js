import express, { json } from 'express'
import todoRouter from './Routes/todo.router.js'
const app = express()

app.use(json())

app.use('/', todoRouter)

const port = 4700

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

export default app;