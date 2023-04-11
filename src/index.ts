import express from 'express';
const app = express();
import mongoose,{connect} from "mongoose";

import {router} from '../src/routes/route';

connect('mongodb://0.0.0.0:27017/TSCRUD')
.then(() => console.log("Connected too MongoDB..."))
   .catch((err) => console.error(err));

   app.use(express.json());
app.use('/',router);




const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Connecting to the port ${PORT}`);
});



