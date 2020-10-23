import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import routes from './routes';


const app = express()
app.use(express.json())
app.use(routes)

interface ResponseError extends Error {
    status?: number;
  }



// notFound
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    var err = new Error('Not Found');
    res.status(404)
    next(err);
})

// catch all
app.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})



app.listen(3333, () =>  console.log('Server is running'))