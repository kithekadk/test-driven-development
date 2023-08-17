import { Router } from "express"
import { getTodo, getTodos } from "../Controllers/todos.controller.js"

const todoRouter = Router()

todoRouter.get('/', getTodos)
todoRouter.get('/todos/:id', getTodo)

export default todoRouter