import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() {
        console.log('LoggerService created');
    }

    info(message: string, clazz?: string) {
        console.log((clazz ? clazz + ':' : '') + message);
    }

    debug(message: string, clazz?: string) {
        console.log((clazz ? clazz + ':' : '') + message);
    }

    error(message: string, clazz?: string) {
        console.error((clazz ? clazz + ':' : '') + message);
    }
}
