import { NotebookService } from './NotebookService';
import { AxiosInstance } from 'axios';
import axios from 'axios';
import { Notebook, NotebookLoad, NotebookPage } from '../models';
import { EngineLoad } from '../models/loads/EngineLoad';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('NotebookService', () => {
    let apiClient: AxiosInstance;

    beforeEach(() => {
        apiClient = mockedAxios;
        NotebookService.setApiClient(apiClient);
    });

    it('should create a notebook', async () => {
        const engineLoad: EngineLoad = {};
        const load: NotebookLoad<EngineLoad> = {
            EngineType: 'mock',
            EngineLoad: engineLoad,
        };
        const notebook: Notebook = {
            name: 'mock',
            description: 'mock',
        };
        const response = { data: notebook };

        mockedAxios.post.mockResolvedValue(response);

        const result = await NotebookService.create(load, notebook);

        expect(mockedAxios.post).toHaveBeenCalledWith('/v1/notebooks', { load, notebook });
        expect(result.name).toEqual(notebook.name);
        expect(result.description).toEqual(notebook.description);
    });

    it('should list notebooks', async () => {
        const notebooks: Array<Notebook> = [
            {
                id: 1,
                name: 'mock',
                description: 'mock',
                createdAt: new Date(),
                updateAt: new Date(),
            }
        ];
        const response = { data: notebooks };

        mockedAxios.get.mockResolvedValue(response);

        const result = await NotebookService.list();

        expect(mockedAxios.get).toHaveBeenCalledWith('/v1/notebooks');
        expect(result).toEqual(notebooks);
    });

    it('should get a notebook by id', async () => {
        const notebook: Notebook = {
            id: 1,
            name: 'mock',
            description: 'mock',
            createdAt: new Date(),
            updateAt: new Date(),
        };
        const response = { data: notebook };

        mockedAxios.get.mockResolvedValue(response);

        const result = await NotebookService.get(1);

        expect(mockedAxios.get).toHaveBeenCalledWith('/v1/notebooks/1');
        expect(result).toEqual(notebook);
    });

    it('should update a notebook', async () => {
        const notebook: Notebook = {
            id: 1,
            name: 'mock',
            description: 'mock',
            createdAt: new Date(),
            updateAt: new Date(),
        };
        const response = { data: notebook };

        mockedAxios.put.mockResolvedValue(response);

        const result = await NotebookService.update(1, notebook);

        expect(mockedAxios.put).toHaveBeenCalledWith('/v1/notebooks/1', notebook);
        expect(result).toEqual(notebook);
    });

    it('should list pages of a notebook', async () => {
        const pages: Array<NotebookPage> = [
            {
                id: 'hash_time',
                name: 'mock',
                description: 'mock',
                theme: 'mock',
                content: 'mock',
                parentId: 'mock',
            }
        ];
        const response = { data: pages };

        mockedAxios.get.mockResolvedValue(response);

        const result = await NotebookService.listPage(1);

        expect(mockedAxios.get).toHaveBeenCalledWith('/v1/notebooks/1/pages');
        expect(result).toEqual(pages);
    });

    it('should get a page of a notebook by id', async () => {
        const page: NotebookPage = {
            id: 'hash_time',
            name: 'mock',
            description: 'mock',
            theme: 'mock',
            content: 'mock',
            parentId: 'mock',
        };
        const response = { data: page };

        mockedAxios.get.mockResolvedValue(response);

        const result = await NotebookService.getPage(1, 'hash_time');

        expect(mockedAxios.get).toHaveBeenCalledWith('/v1/notebooks/1/pages/hash_time');
        expect(result).toEqual(page);
    });

    it('should create a page in a notebook', async () => {
        const page: NotebookPage = {
            id: 'hash_time',
            name: 'mock',
            description: 'mock',
            theme: 'mock',
            content: 'mock',
            parentId: 'mock',
        };
        const response = { data: page };

        mockedAxios.post.mockResolvedValue(response);

        const result = await NotebookService.createPage(1, page);

        expect(mockedAxios.post).toHaveBeenCalledWith('/v1/notebooks/1/pages', page);
        expect(result).toEqual(page);
    });

    it('should update a page in a notebook', async () => {
        const page: NotebookPage = {
            id: 'hash_time',
            name: 'mock',
            description: 'mock',
            theme: 'mock',
            content: 'mock',
            parentId: 'mock',
        };
        const response = { data: page };

        mockedAxios.put.mockResolvedValue(response);

        const result = await NotebookService.updatePage(1, page);

        expect(mockedAxios.put).toHaveBeenCalledWith(`/v1/notebooks/1/pages/${page.id}`, page);
        expect(result).toEqual(page);
    });

    it('should delete a page in a notebook', async () => {
        mockedAxios.delete.mockResolvedValue({});

        await NotebookService.deletePage(1, 'hash_time');

        expect(mockedAxios.delete).toHaveBeenCalledWith('/v1/notebooks/1/pages/hash_time');
    });

    it('should list engines', async () => {
        const engines: Array<any> = [/* mock engine data */];
        const response = { data: engines };

        mockedAxios.get.mockResolvedValue(response);

        const result = await NotebookService.listEngines();

        expect(mockedAxios.get).toHaveBeenCalledWith('/v1/engines');
        expect(result).toEqual(engines);
    });
});
