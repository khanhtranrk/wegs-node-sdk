"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiClient = createApiClient;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
function createApiClient(baseURL) {
    let apiClient = axios_1.default.create({
        baseURL: config_1.config.baseURL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    apiClient.interceptors.response.use(response => response, error => {
        if (error.response) {
            console.error('Response error:', error.response.data);
            throw new Error(`Server Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
        }
        else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('No response received from server');
        }
        else {
            console.error('Request error:', error.message);
            throw new Error(`Request Error: ${error.message}`);
        }
    });
    return apiClient;
}
