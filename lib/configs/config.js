"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const configPath = path_1.default.resolve(process.cwd(), 'wegs.config.ts');
const defaultConfig = {
    baseURL: 'https://api.example.com',
};
let customConfig = { default: {} };
if (fs_1.default.existsSync(configPath)) {
    customConfig = require(configPath);
}
else {
    console.warn('my-package.config.js file not found, using default configuration');
}
const config = Object.assign(Object.assign({}, defaultConfig), customConfig.default);
exports.config = config;
console.log('Custom config:', config);
