import express, { Request, Response } from 'express'
import {Task} from './types/types'
import cors from 'cors'
const app = express()

let counter: Task[] = [
    {
        id: "a1",
        val: 10
    },
    {
        id: "a2",
        val: 11
    }
]

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('todo server')
})

app.get('/counter', (req: Request, res: Response) => {
    res.send(counter)
})

app.post('/counter', (req: Request, res: Response) => {
    console.log('Body: ', req.body);
    counter.push(req.body)
    res.send(req.body)
})

app.delete('/counter/:id', (req: Request, res: Response) => {
    counter = counter.filter((counter, id) => id != req.params.id)
    res.send(req.body)
    console.log('Deleted in :', req.params.id)
})

app.listen(5000, () => {
    console.log('server running')
})


