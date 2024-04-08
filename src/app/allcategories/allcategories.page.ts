import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from "../config/config";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.page.html',
  styleUrls: ['./allcategories.page.scss'],
})
export class AllcategoriesPage implements OnInit {
  categories: any = {}

  constructor(private navCtrl: NavController, private router: Router, private http: HttpClient) {}

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
  }

}
