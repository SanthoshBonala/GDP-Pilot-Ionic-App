
import { Url } from '../config/config.httpsurl'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpService{

    constructor(private http:Http){}

    getHttpService(routeurl){
        return this.http.get(Url+routeurl);
    }
    postHttpService(routeurl,body){
        return this.http.post(Url + routeurl,body);
    }

}