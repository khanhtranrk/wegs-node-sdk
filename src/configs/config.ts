import path from 'path';
import fs from 'fs';

interface IConfig {
    baseURL: string;
}

const configPath = path.resolve(process.cwd(), 'wegs.config.js');
const defaultConfig = {
    baseURL: 'https://api.example.com',
};

let customConfig = {};

if (fs.existsSync(configPath)) {
    customConfig = require(configPath).default;
} else {
    console.warn('my-package.config.js file not found, using default configuration');
}


const config: IConfig = {
    ...defaultConfig,
    ...customConfig,
}

export { config, IConfig };
