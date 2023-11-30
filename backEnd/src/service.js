import express from 'express';
import dotenv  from 'dotenv';
import {connectDB} from './utils/db.js';
import router from './routers/productos.router.js';
import cors from 'cors';

dotenv.config();
const app = express();


const port = process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));// para manejar formularios POST
app.use("/api/products", router);


app.get('/', (req, res) => {
  res.send('Servidor de mi primera APi');
});

/*app.listen(port,() => {
  connectDB(MONGO_URI)
  console.log(`Servidor iniciado https://localhost:${port}`);
 }); */

 const start = async () => {
    try {
        
        await connectDB(MONGO_URI);
        app.listen(port, () => {
            console.log(`Servidor iniciado en https://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

// Llama a la función start
start();
