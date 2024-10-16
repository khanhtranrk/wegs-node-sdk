import 'dotenv/config'

interface IConfig {
    baseURL: string;
}

console.log(process.env.WEGS_SERVER_DOMAIN);

const config: IConfig = {
    baseURL: process.env.WEGS_SERVER_DOMAIN || 'https://api.example.com',
};

export { config, IConfig };
