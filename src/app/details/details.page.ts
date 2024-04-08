import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BaseURL } from "../config/config";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  product: any = {};
  category: any = {};
  productId: any;

  constructor(private router: Router, private http: HttpClient, private navCtrl: NavController, private route: ActivatedRoute) {}

  putDetails() {
    this.router.navigate(['/individual']);
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', this.productId);
    this.http.get<any[]>(`${BaseURL}/api/products/${this.productId}`).subscribe(
      (data) => {
        this.product = data;
        this.category = this.product.category;
        console.log(this.category);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
