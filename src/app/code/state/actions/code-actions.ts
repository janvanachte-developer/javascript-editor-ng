import CodeStoreService from "../code-store.service";

export class CodeActions {

    public static updateCodeAsString(codeAsString: string) {
        return {
            type: CodeStoreService.SET_CODE,
            payload: codeAsString
        };
    }

    public static readFileAndUpdateCodeAsString(file: any) {
        return {
            type: CodeStoreService.SET_FILEPATH,
            payload: file
        };
    }

    public static addTag(newTagName: string) {
        return {type: CodeStoreService.ADD_TAG, payload: newTagName};
    }

    public static removeTag(index: number) {
        return {type: CodeStoreService.REMOVE_TAG, payload: index};
    }
}