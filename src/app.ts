import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import indexRouter from './routes';

const app: Application = express();

app.use(bodyParser.json())
app.use('/api/v1', indexRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Server is ON')
})

export default app;