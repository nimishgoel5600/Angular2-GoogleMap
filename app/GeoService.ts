import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GeoService {
    constructor(private http: Http) { }

    private extractData(res: any) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response sttus:' + res.status);
        }
        let serviceData = res.json();
        return serviceData || {};
    }

    loadFromLocation(term: string): Observable<any> {
     return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + term + 'LK&sensor=false')
      .map(this.extractData);
  }

    loadFromGeoCode(lat: string, lng: string): Observable<any> {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?latlng=' + lat + ',' + lng )
        .map(this.extractData);
    }
// tslint:disable-next-line:eofline
}