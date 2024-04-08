import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../config/config';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: any = {};
  products: any = {};

  constructor(private navCtrl: NavController, private router: Router, private http: HttpClient) {}

testFunction(){
}


  goToDetails(id: any) {

    console.log('This is product id', id);
    this.navCtrl.navigateForward(`/details/${id}`);
  }
  goToProducts(id: any){
    console.log('This is product id', id);
    this.navCtrl.navigateForward(`/prodcat/${id}`);
    //this.router.navigate(['/products'])
  }


  ngOnInit() {
    this.http.get<any[]>(`${BaseURL}/api/category`).subscribe(
      (data) => {
        this.categories = {data: data}
        console.log(this.categories);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.http.get<any[]>(`${BaseURL}/api/products`).subscribe(
      (data) => {
        this.products = {data: data}
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }
  }

