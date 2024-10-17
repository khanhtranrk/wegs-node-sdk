import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createApiClient } from './apiClient';

describe('createApiClient', () => {
    let mock: MockAdapter;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.restore();
    });

    it('should create an axios instance with the correct baseURL', () => {
        const baseURL = 'http://example.com';
        const apiClient = createApiClient(baseURL);

        expect(apiClient.defaults.baseURL).toBe(baseURL);
    });

    it('should handle successful responses', async () => {
        const baseURL = 'http://example.com';
        const apiClient = createApiClient(baseURL);

        mock.onGet('/test').reply(200, { data: 'test' });

        const response = await apiClient.get('/test');
        expect(response.data).toEqual({ data: 'test' });
    });

    it('should handle server errors', async () => {
        const baseURL = 'http://example.com';
        const apiClient = createApiClient(baseURL);

        mock.onGet('/test').reply(500, { message: 'Internal Server Error' });

        await expect(apiClient.get('/test')).rejects.toThrow('Server Error: 500 - Internal Server Error');
    });

    it('should handle request errors', async () => {
        const baseURL = 'http://example.com';
        const apiClient = createApiClient(baseURL);

        mock.onGet('/test').timeout();

        await expect(apiClient.get('/test')).rejects.toThrow('Request Error: timeout of 5000ms exceeded');
    });
});
