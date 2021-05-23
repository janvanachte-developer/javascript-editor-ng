import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class FileReadService {

  public readFileToString(file: File): Observable<string> {

    return new Observable(observable => {

      const reader = new FileReader();

      reader.onerror = error => observable.error(error);
      reader.onabort = error => observable.error(error);
      reader.onload = () => observable.next(<string>reader.result);
      reader.onloadend = () => observable.complete();
      reader.abort = () => observable.unsubscribe();

      return reader.readAsText(file);
    });
  }

  constructor() { }
}
