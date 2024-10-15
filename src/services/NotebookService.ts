import { apiClient } from "../configs";
import { Notebook, NotebookPage } from "../models";

async function list(): Promise<Array<Notebook>> {
    let notebooks = await apiClient.get('/v1/notebooks');

    return notebooks.data;
}

async function get(id: number): Promise<Notebook> {
    let notebook = await apiClient.get(`/v1/notebooks/${id}`);

    return notebook.data;
}

async function create(load: any, notebook: Notebook): Promise<Notebook> {
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

export { list, get, create, update, listPage };
