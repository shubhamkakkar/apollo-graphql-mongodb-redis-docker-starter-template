import dotenv from 'dotenv';

dotenv.config();

type Constants  = {
    MONGO_URI_DEV: string
}

export default  {
    MONGO_URI_DEV: process.env.MONGO_URI_DEV || ''
} as  Constants
