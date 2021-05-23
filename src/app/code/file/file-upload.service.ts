import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from "rxjs";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    private API_BASE_URL = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public uploadFile(file: File): Observable<HttpEvent<{}>> {
        const formData = new FormData();
        formData.append('files', file, file.name);

        const options = {
            reportProgress: true
        };

        const request = new HttpRequest(
            'POST',
            `${this.API_BASE_URL}/api/file`,
            formData,
            options
        );
        return this.httpClient.request(request);
    }
}
