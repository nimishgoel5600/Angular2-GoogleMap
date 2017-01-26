import { Component } from '@angular/core';
import { GeoService } from './GeoService';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: `./app.component.html`,
  styleUrls: ['/app.componenet.css'],
  providers : [GeoService]
})
export class AppComponent {
  title = 'Angular2 google map test';
  lat: number = 61.5240;
  lng: number = 105.3188;
  zoom: number = 3;
  markers: marker[] = [
    {
      lat: 9.6699865,
      lng: 80.010917,
      label: 'A',
      draggable: true
    }
  ];
  location: string;
  latitude: string;
  longitude: string;

  findLocationbyName(): void {
    let result;
    result =   this.geoService.loadFromLocation(this.location)
     .subscribe(data => {
       result = data;
       console.log(result);
       this.markers.push({'lat': data.results[0].geometry.location.lat,
       'lng': data.results[0].geometry.location.lng,
       label: this.location,
       draggable: true} );
     });
  }

  findLocationByGeoCode(): void {
    let result;
    result = this.geoService.loadFromGeoCode(this.latitude, this.longitude)
     .subscribe(data => {
          result = data;
          console.log(result);
          if (data.results.length === 0) {
            alert('No results');
          }
          this.location = data.results[0].formatted_address;
          this.markers.push({'lat': data.results[0].geometry.location.lat,
         'lng': data.results[0].geometry.location.lng,
          label: this.location,
          draggable: true} );
     });
  }
  constructor(private geoService: GeoService) {
  }
  clickedMarker(label: string, index: number) {
  }
  mapClicked($event: MouseEvent) {
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}
// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
