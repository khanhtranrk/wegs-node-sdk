import 'dotenv/config'

interface IConfig {
    baseURL: string;
}

const config: IConfig = {
    baseURL: process.env.WEGS_SERVER_DOMAIN || 'https://api.example.com',
};

export { config, IConfig };
