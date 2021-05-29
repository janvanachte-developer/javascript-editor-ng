import {TestBed} from '@angular/core/testing';

import {FileReadService} from './file-read.service';

describe('FileReadService', () => {
    let service: FileReadService;
    let mockReader;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FileReadService]
        });
        service = TestBed.inject(FileReadService);

        mockReader = spyOn(new FileReader(), 'readAsText');
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // https://medium.com/angular-in-depth/how-to-test-observables-a00038c7faad
    it('should return Observqble text', done => {

        const file = new File(['some text'], "some file");

        service.readAsTextObservable(file)
            .subscribe(result => {
                expect(result).toBe("some text");
                done();
            });
    });

    it('should return Promise text', function (done) {

        const file = new File(['some text'], "some file");

        service.readAsTextPromise(file)
            .then(result => {
                expect(result).toBe("some text");
                done();
            });
    });
})