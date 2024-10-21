import { AxiosInstance } from "axios";
import { Notebook, NotebookLoad, NotebookPage } from "../models";
import { EngineLoad } from "../models/loads/EngineLoad";

let apiClient: AxiosInstance

function setApiClient(client: AxiosInstance) {
    apiClient = client;
}

interface INotebookService {
    setApiClient(client: AxiosInstance): void;
    list(): Promise<Array<Notebook>>;
    get(id: number): Promise<Notebook>;
    create<T extends EngineLoad>(load: NotebookLoad<T>, notebook: Notebook): Promise<Notebook>;
    update(id: number, notebook: Notebook): Promise<Notebook>;
    listPage(id: number): Promise<Array<NotebookPage>>;
    getPage(id: number, pageId: string): Promise<NotebookPage>;
    createPage(id: number, page: NotebookPage): Promise<NotebookPage>;
    updatePage(id: number, page: NotebookPage): Promise<NotebookPage>;
    updatePageContent(id: number, pageId: string, page: NotebookPage): Promise<NotebookPage>;
    deletePage(id: number, pageId: string): Promise<void>;
    listEngines(): Promise<Array<any>>;
}

async function list(): Promise<Array<Notebook>> {
    let notebooks = await apiClient.get('/v1/notebooks');

    return notebooks.data;
}

async function get(id: number): Promise<Notebook> {
    let notebook = await apiClient.get(`/v1/notebooks/${id}`);

    return notebook.data;
}

async function create<T extends EngineLoad>(load: NotebookLoad<T>, notebook: Notebook): Promise<Notebook> {
    let newNotebook = await apiClient.post('/v1/notebooks', {load, notebook});

    return newNotebook.data;
}

async function update(id: number, notebook: Notebook): Promise<Notebook> {
    let updatedNotebook = await apiClient.put(`/v1/notebooks/${id}`, notebook);

    return updatedNotebook.data;
}

async function listPage(id: number): Promise<Array<NotebookPage>> {
    let notebooks = await apiClient.get(`/v1/notebooks/${id}/pages`);

    return notebooks.data;
}

async function getPage(id: number, pageId: string): Promise<NotebookPage> {
    let page = await apiClient.get(`/v1/notebooks/${id}/pages/${pageId}`);

    return page.data;
}

async function createPage(id: number, page: NotebookPage): Promise<NotebookPage> {
    let newPage = await apiClient.post(`/v1/notebooks/${id}/pages`, page);

    return newPage.data;
}

async function updatePage(id: number, page: NotebookPage): Promise<NotebookPage> {
    let updatedPage = await apiClient.put(`/v1/notebooks/${id}/pages/${page.id}`, page);

    return updatedPage.data;
}

async function updatePageContent(id: number, pageId: string, page: NotebookPage): Promise<NotebookPage> {
    let updatedPage = await apiClient.put(`/v1/notebooks/${id}/pages/${pageId}/content`, page);

    return updatedPage.data;
}

async function deletePage(id: number, pageId: string): Promise<void> {
    await apiClient.delete(`/v1/notebooks/${id}/pages/${pageId}`);
}

async function listEngines(): Promise<Array<any>> {
    let engines = await apiClient.get('/v1/engines');

    return engines.data;
}

const NotebookService: INotebookService = {
    setApiClient,
    list, get, create, update,
    listPage, getPage, createPage, updatePage, updatePageContent, deletePage,
    listEngines
};

export { NotebookService, INotebookService };
