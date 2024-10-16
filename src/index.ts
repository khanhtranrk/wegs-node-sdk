import { createApiClient } from './configs';
import { INotebookService, NotebookService } from './services';

interface IWService {
    notebook: INotebookService
}

function newWService(serverDomain: string): IWService {
    let apiClient = createApiClient(serverDomain);
    NotebookService.setApiClient(apiClient);

    return {
        notebook: NotebookService
    };
}

export {newWService, IWService};
export * from './models';
