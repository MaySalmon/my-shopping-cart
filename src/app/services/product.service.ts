import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  productsUrl } from 'src/app/config/api'
import { Product } from '../models/product';

 @Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1, 'product 1', 'this is product 1', 100),
  //   new Product(2, 'product 1', 'this is product 2', 10),
  //   new Product(3, 'product 1', 'this is product 3', 140),
  //   new Product(4, 'product 1', 'this is product 4', 105),
  //   new Product(5, 'product 1', 'this is product 5', 120),
  //   new Product(6, 'product 1', 'this is product 6', 100),
  //   new Product(7, 'product 1', 'this is product 6', 100),
  //   new Product(8, 'product 1', 'this is product 6', 100),
 
  // ]

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  deleteItemFromList(product: Product): Observable<any>{
    console.log('deleteee');
    return this.http.delete(productsUrl + '/' + product.id);
    }
  

}

