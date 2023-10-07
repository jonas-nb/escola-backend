import express from 'express';
import dotenv from 'dotenv';
import loginRoutes from '../src/routes/loginRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { db } from '../src/instances/pg.js';
//testes
import { User } from '../src/models/user.js';

//server
const app = express();
app.use(express.json());

//variáveis de ambiente
dotenv.config();

//db conection
const db_conection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
db_conection();

//midlewares
const corsOption = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));

//rotas
app.use(loginRoutes);

//porta
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
