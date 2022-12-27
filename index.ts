import express from "express";
import {Express, Request, Response} from "express";

const app: Express = express();
const port: number|string = 3000;

app.get('/', (req:Request, res:Response)=>{
    res.send('HolA DESDE EL SERVIDOR con ts')
});

app.get('/hello', (req:Request, res:Response)=>{
    res.send('HolA DESDE EL SERVIDOR con ts desde helloword')
});

app.listen(port, ()=>{
    console.log(`EXPRESS SERVER: Running at http://localhots:${port}`);
})