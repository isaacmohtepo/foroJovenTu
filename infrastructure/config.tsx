import dotenv from 'dotenv';
import path from 'path';

const config = {
    URL: process.env.NEXT_PUBLIC_BASE_URL,
    PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
    USERNAME: process.env.NEXT_PUBLIC_USERNAME,
    ACCESS_CSV_TOKEN: process.env.NEXT_PUBLIC_ACCESS_CSV_TOKEN
};

export default config;
