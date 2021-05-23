export interface CodeModel {

    filePath: string;
    codeAsString: string;
    tags: string[];
}

export const initialState: CodeModel = {
    tags: ['new'],
    filePath: '',
    codeAsString: "some code"
};