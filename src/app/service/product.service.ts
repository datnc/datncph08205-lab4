import { Injectable } from '@angular/core';
import { Product } from "../Product";
import { data } from "../MockData";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class ProductService {
  products = data;
  api = "https://5e7ef5607a92ed001655feab.mockapi.io/products"
  constructor(
    private http : HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  removeProducts(id){
    console.log("service")
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }
}