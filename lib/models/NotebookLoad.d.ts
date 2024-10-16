import { EngineLoad } from './loads/EngineLoad';
interface NotebookLoad<T extends EngineLoad> {
    EngineType: string;
    EngineLoad: number;
}
export { NotebookLoad };
