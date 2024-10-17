import { newWService, IWService } from './index';
import { createApiClient } from './configs';
import { NotebookService } from './services';

jest.mock('./configs');
jest.mock('./services');

describe('newWService', () => {
    const serverDomain = 'http://example.com';
    const mockApiClient = {};

    beforeEach(() => {
        (createApiClient as jest.Mock).mockReturnValue(mockApiClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new IWService instance', () => {
        const service: IWService = newWService(serverDomain);

        expect(service).toHaveProperty('notebook');
        expect(service.notebook).toBe(NotebookService);
    });

    it('should call createApiClient with the correct serverDomain', () => {
        newWService(serverDomain);

        expect(createApiClient).toHaveBeenCalledWith(serverDomain);
    });

    it('should set the apiClient on NotebookService', () => {
        newWService(serverDomain);

        expect(NotebookService.setApiClient).toHaveBeenCalledWith(mockApiClient);
    });
});
