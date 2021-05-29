import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class FileReadService {

    public readAsTextObservable(file: File): Observable<string> {
        return new Observable(observable => {
            const fileReader = new FileReader();

            fileReader.onerror = error => observable.error(error);
            fileReader.onabort = error => observable.error(error);
            fileReader.onload = () => observable.next(<string>fileReader.result);
            fileReader.onloadend = () => observable.complete();
            fileReader.abort = () => observable.unsubscribe();

            return fileReader.readAsText(file);
        });
    }

    public readAsTextPromise(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onerror = reject;
            fileReader.onabort = reject;
            fileReader.onload = () => { resolve(<string>fileReader.result) };
            fileReader.abort = reject;

            fileReader.readAsText(file);
        });
    }

    constructor() {
    }
}
