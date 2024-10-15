import { Notebook } from "./models";
import { NotebookService } from "./services";

let notebook: Notebook = {
    name: 'Notebook 1',
    description: 'Notebook 1 description',
}

NotebookService.listPage(1).then((notebooks) => {
    console.log(notebooks);
}).catch((error) => {
    console.error(error);
});
