import { Component } from '@angular/core';
//import { NavController, ModalController } from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {AddPage} from '../add-page/add-page';
//import { Weather } from '../../providers/weather';
import 'rxjs/add/operator/map';
//import { Temperature } from '../../pipes/temperature';
//import { Forecast } from '../forecast/forecast';
import {http} from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  providers: [Weather]

})
export class HomePage {

  //public weatherList = [];
items

  constructor(public navCtrl: NavController, private http: http){
  this.http.get("http://localhost:3000/db").map(res => res.json()).subscribe(data => {
    this.items = data;
    console.log ("GOT RESULTS");
  },
  error => {
    console.log("OOPS!");
  });
}

    /*public modalCtrl: ModalController
    public weather: Weather
  ) { }

  addWeather() {
    let addWeatherModal = this.modalCtrl.create(AddPage);
    addWeatherModal.onDidDismiss((data) => {

      if (data) {
        this.getWeather(data.city, data.country);
      }
    });
    addWeatherModal.present(AddPage);
  }

  getWeather(city: string, country: string) {
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data => {
        this.weatherList.push(data);
      },
      err => console.log(err),
      () => console.log('Weather Here'))
  }


  viewForecast(cityWeather) {
    this.navCtrl.push(Forecast, { cityWeather: cityWeather });
  }
}
*/
}
