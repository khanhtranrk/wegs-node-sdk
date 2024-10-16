interface NotebookPage {
    id?: string;
    name: string;
    description: string;
    theme: string;
    content: string;
    parentId: string;
    createdAt?: Date;
    updateAt?: Date;
}

export { NotebookPage };
