import { apiClient } from "../configs";
import { Notebook, NotebookLoad, NotebookPage } from "../models";
import { EngineLoad } from "../models/loads/EngineLoad";

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

async function createPage(id: number, page: NotebookPage): Promise<NotebookPage> {
    let newPage = await apiClient.post(`/v1/notebooks/${id}/pages`, page);

    return newPage.data;
}

async function updatePage(id: number, page: NotebookPage): Promise<NotebookPage> {
    let updatedPage = await apiClient.put(`/v1/notebooks/${id}/pages/${page.id}`, page);

    return updatedPage.data;
}

async function deletePage(id: number, pageId: number): Promise<void> {
    await apiClient.delete(`/v1/notebooks/${id}/pages/${pageId}`);
}

async function listEngines(): Promise<Array<any>> {
    let engines = await apiClient.get('/v1/engines');

    return engines.data;
}

export {
    list, get, create, update,
    listPage, createPage, updatePage, deletePage
};
