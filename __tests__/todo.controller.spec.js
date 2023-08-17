import request from 'supertest'
import app from '../server'

describe('Todos', ()=>{
    it('should get all todos', async()=>{
        const res = await request(app).get('/')

        expect(res.status).toBe(200)
        expect(res.body.todos).toBeInstanceOf(Array)
    })

    it('should get single todo by ID', async()=>{
        const res = await request(app).get('/todos/1')

        expect(res.statusCode).toBe(200)
        expect(res.body.todo).toEqual(
            expect.objectContaining({
                userId: expect.any(Number),
                title: expect.any(String),
                completed: expect.any(Boolean),
                id: expect.any(Number)
            })
        ) 
    })

    it('should throw todo not found error', async()=>{
        const res = await request(app).get('/todos/988yufuy')

        expect(res.statusCode).toBe(404)
        expect(res.body.error).toBe('Todo not found')
    })  
})