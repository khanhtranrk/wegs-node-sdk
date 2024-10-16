import { INotebookService } from './services';
interface IWService {
    notebook: INotebookService;
}
declare function newWService(serverDomain: string): IWService;
export { newWService, IWService };
export * from './models';
