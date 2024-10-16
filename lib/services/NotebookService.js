"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookService = void 0;
let apiClient;
function setApiClient(client) {
    apiClient = client;
}
function list() {
    return __awaiter(this, void 0, void 0, function* () {
        let notebooks = yield apiClient.get('/v1/notebooks');
        return notebooks.data;
    });
}
function get(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let notebook = yield apiClient.get(`/v1/notebooks/${id}`);
        return notebook.data;
    });
}
function create(load, notebook) {
    return __awaiter(this, void 0, void 0, function* () {
        let newNotebook = yield apiClient.post('/v1/notebooks', { load, notebook });
        return newNotebook.data;
    });
}
function update(id, notebook) {
    return __awaiter(this, void 0, void 0, function* () {
        let updatedNotebook = yield apiClient.put(`/v1/notebooks/${id}`, notebook);
        return updatedNotebook.data;
    });
}
function listPage(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let notebooks = yield apiClient.get(`/v1/notebooks/${id}/pages`);
        return notebooks.data;
    });
}
function createPage(id, page) {
    return __awaiter(this, void 0, void 0, function* () {
        let newPage = yield apiClient.post(`/v1/notebooks/${id}/pages`, page);
        return newPage.data;
    });
}
function updatePage(id, page) {
    return __awaiter(this, void 0, void 0, function* () {
        let updatedPage = yield apiClient.put(`/v1/notebooks/${id}/pages/${page.id}`, page);
        return updatedPage.data;
    });
}
function deletePage(id, pageId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield apiClient.delete(`/v1/notebooks/${id}/pages/${pageId}`);
    });
}
function listEngines() {
    return __awaiter(this, void 0, void 0, function* () {
        let engines = yield apiClient.get('/v1/engines');
        return engines.data;
    });
}
const NotebookService = {
    setApiClient,
    list, get, create, update,
    listPage, createPage, updatePage, deletePage,
    listEngines
};
exports.NotebookService = NotebookService;
