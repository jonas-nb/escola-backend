import { DataTypes } from 'sequelize';
import { db } from '../instances/pg.js';

export const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    pass: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: 'user', schema: 'auth', timestamps: false }
);
