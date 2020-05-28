import path from 'path';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

let port = process.env.PORT || 5000;
let app = express ();

 app.listen(port, console.log(`Server listening on port ${port}`));
//  app.get('/', (req, res) => {
//      res.send("Hello World from server.js");
//  })


 app.use(express.static(path.resolve(__dirname,'../../dist')));
 app.get('/*',(req,res)=>{
     res.sendFile(path.resolve('index.html'));
 });