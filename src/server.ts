import express, { Request, Response } from 'express'

const app = express()
const port = 8080

app.get('/', (req: Request, res:Response) => {
    return res.send('Rota /')
})

app.listen(port, () => {
    console.log('Server running')
})