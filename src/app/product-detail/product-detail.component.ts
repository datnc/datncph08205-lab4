import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
products : Product;
  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      this.productService.getProduct(param.id).subscribe(data =>{
        this.products=data;
      })
    }
      );
  }
}