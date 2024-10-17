import { AxiosInstance } from "axios";
import { Notebook, NotebookLoad, NotebookPage } from "../models";
import { EngineLoad } from "../models/loads/EngineLoad";
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
    deletePage(id: number, pageId: string): Promise<void>;
    listEngines(): Promise<Array<any>>;
}
declare const NotebookService: INotebookService;
export { NotebookService, INotebookService };
