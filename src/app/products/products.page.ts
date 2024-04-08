import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { BaseURL } from "../config/config";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any = {};

  constructor(private router: Router, private http: HttpClient, private navCtrl: NavController) {}

  goToDetails(id: any) {
    //this.router.navigate(['/details/1']);

    console.log('This is product id', id);
    this.navCtrl.navigateForward(`/details/${id}`);
  }

  ngOnInit() {
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
