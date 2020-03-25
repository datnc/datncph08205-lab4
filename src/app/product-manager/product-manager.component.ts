import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import {ProductService} from '../service/product.service';

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  products : Product[];
  constructor(
    private productService : ProductService
  ) {}

  ngOnInit() {
   this.getProducts();
  }
    getProducts(){
    this.productService.getProducts().subscribe(response => this.products = response, error => console.log(error));
  }

   RemoveProducts(id){
     console.log("component")
     this.products = this.productService.removeProducts(id);
   }
}
