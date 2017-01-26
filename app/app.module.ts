import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AgmCoreModule} from 'angular2-google-maps/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports:      [ HttpModule, BrowserModule, FormsModule, AgmCoreModule.forRoot({apiKey: 'AIzaSyAe3ci9yavJcWt7MaJE8DusAuZo-QeRqkU',
  libraries: ['places']}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
