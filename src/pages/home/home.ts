import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items

  constructor(public navCtrl: NavController, private http: Http) {
        //this.http.get("http://task.lafrime.net/artists/api.php/artists").map(res => res.json()).subscribe(data => {
        //this.http.get("https://api.randomuser.me/?results=10").map(res => res.json()).subscribe(data => {
        this.http.get("http://localhost:3000/db").map(res => res.json()).subscribe(data => {
        //this.http.get("https://randomuser.me/api/?results").map(res => res.json()).subscribe(data => {
        this.items = data;
        //this.items.push(data);
        console.log("GOT RESULTS");
        },
        error => {
          console.log("OOPS!");
        });
  }

  itemClicked(event, item) {
    console.log(item.title);
  }

}
