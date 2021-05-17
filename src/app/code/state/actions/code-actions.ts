import {Action} from "redux";

export interface UpdateCodeAsStringAction extends Action {
    payload: string
}

export interface SetFilePathAction extends Action {
    payload: string
}

export interface ReadFileAndUpdateCodeAsStringAction extends Action {
    payload: File
}

export interface AddTagAction extends Action {
    payload: string
}

export interface RemoveTagAction extends Action {
    payload: number
}

export class CodeActions {

    static ADD_TAG = 'ADD_TAG';
    static SET_FILEPATH = 'READ_FILE_INTO_CODE';
    static REMOVE_TAG = 'REMOVE_TAG';
    static READ_FILE_INTO_CODE = 'READ_FILE_INTO_CODE';
    static SET_CODE = 'SET_CODE';


    public static updateCodeAsString(codeAsString: string): UpdateCodeAsStringAction {
        return {
            type: CodeActions.SET_CODE,
            payload: codeAsString
        };
    }

    public static setFilePath(filePath: string): SetFilePathAction {
        return {
            type: CodeActions.SET_FILEPATH,
            payload: filePath
        };
    }

    public static readFileAndUpdateCodeAsString(file: File): ReadFileAndUpdateCodeAsStringAction {
        return {
            type: CodeActions.READ_FILE_INTO_CODE,
            payload: file
        };
    }

    public static addTag(newTagName: string): AddTagAction {
        return {type: CodeActions.ADD_TAG, payload: newTagName};
    }

    public static removeTag(index: number): RemoveTagAction {
        return {type: CodeActions.REMOVE_TAG, payload: index};
    }


}