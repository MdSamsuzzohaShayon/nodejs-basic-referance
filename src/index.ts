import express, {Application, Request, Response, NextFunction} from 'express';

// const app: express.Application = express();
const app: Application = express();


// https://www.npmjs.com/package/ts-node
app.get('/', (req: Request, res:Response, next:NextFunction) => {
    res.send("server is running");
});


app.listen(5000, () => console.log("Server is running on port 5000"));
