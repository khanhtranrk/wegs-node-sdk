"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
const config = {
    baseURL: process.env.WEGS_SERVER_DOMAIN || 'https://api.example.com',
};
exports.config = config;
