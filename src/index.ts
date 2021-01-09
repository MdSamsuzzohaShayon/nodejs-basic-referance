import express, {Application, Request, Response, NextFunction} from 'express';

// const app: express.Application = express();
const app: Application = express();

const add = (a: number, b: number): number => a+b;


// https://www.npmjs.com/package/ts-node
app.get('/', (req: Request, res:Response, next:NextFunction) => {
    console.log(add(5, 6));
    res.send("server is running");
});


app.listen(5000, () => console.log("Server is running on port 5000"));
