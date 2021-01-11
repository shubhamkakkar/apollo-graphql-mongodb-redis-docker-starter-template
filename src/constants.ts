import dotenv from 'dotenv';

dotenv.config();

type Constants = {
  MONGO_URI_DEV: string;
  REDIS_DB_PORT: number;
  REDIS_DB_HOST: string;
};

export default {
  MONGO_URI_DEV: process.env.MONGO_URI_DEV || '',
  REDIS_DB_PORT: process.env.REDIS_DB_PORT || 6379,
  REDIS_DB_HOST: process.env.REDIS_DB_HOST || '',
} as Constants;
