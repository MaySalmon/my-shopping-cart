import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  productsUrl } from 'src/app/config/api'
import { Product } from '../models/product';
import { map } from 'rxjs/operators';






 @Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  deleteItemFromList(product: Product): Observable<any>{
    console.log('deleteee');
    return this.http.delete(productsUrl + '/' + product.id);
    }
  
   addNewProduct(product: Product): Observable<any>{
    console.log('added new');
    return this.http.post(productsUrl, product);
    }


    getParticular(id: number) {
        return this.http.get<Product[]>(productsUrl +"/" + id);
    }
      
      
     
    }