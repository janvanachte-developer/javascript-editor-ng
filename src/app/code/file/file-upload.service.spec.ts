import { TestBed } from '@angular/core/testing';

import { FileUploadService } from './file-upload.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('FileUploadService', () => {
  let service: FileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(FileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
