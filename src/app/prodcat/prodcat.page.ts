import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from "../config/config";

@Component({
  selector: 'app-prodcat',
  templateUrl: './prodcat.page.html',
  styleUrls: ['./prodcat.page.scss'],
})
export class ProdcatPage implements OnInit {
  products: any = {};
  productId: any;
  category: any = {};

  constructor(private http: HttpClient, private navCtrl: NavController, private route: ActivatedRoute) { }
  goToDetails(id: any) {
    //this.router.navigate(['/details/1']);
    console.log('This is product id', id);
    this.navCtrl.navigateForward(`/details/${id}`);
  }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>(`${BaseURL}/api/products/?category[in]=${this.productId}`).subscribe(
      (data) => {
        this.products = {data: data}

        try {
          if (this.products && this.products.data && this.products.data.length > 0 && this.products.data[0].category && this.products.data[0].category.category) {
            this.category = this.products.data[0].category.category;
          } else {
            this.category = 'Category';
          }
        } catch (error) {
         // console.error("An error occurred:", error);
        }

        //console.log('category', this.category);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
