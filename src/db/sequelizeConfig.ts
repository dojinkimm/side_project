import { Sequelize } from 'sequelize-typescript';
import { User, Room, Reservation } from '../models';

const { DB_HOST, DB_PORT, DB_USER, DB_PW, DB_NAME } = process.env;

export const sequelize = new Sequelize({
  host: DB_HOST,
  port: DB_PORT ? +DB_PORT : 5432,
  username: DB_USER,
  password: DB_PW,
  database: DB_NAME,
  dialect: 'postgres',
  models: [User, Room, Reservation],
  logging: false
});
