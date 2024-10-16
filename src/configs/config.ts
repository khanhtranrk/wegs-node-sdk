import path from 'path';
import fs from 'fs';

interface IConfig {
    baseURL: string;
}

const configPath = path.resolve(process.cwd(), 'wegs.config.ts');
const defaultConfig = {
    baseURL: 'https://api.example.com',
};

let customConfig = {default: {}};

if (fs.existsSync(configPath)) {
    customConfig = require(configPath);
} else {
    console.warn('my-package.config.js file not found, using default configuration');
}


const config: IConfig = {
    ...defaultConfig,
    ...customConfig.default,
}

console.log('Custom config:', config);

export { config, IConfig };
