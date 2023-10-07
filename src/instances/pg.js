import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize(
  'escola',
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);
