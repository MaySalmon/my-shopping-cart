import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item'
import { cartUrl } from '../config/api';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[])=>{
        let cartItems: CartItem[] = [];
        for(let item of result){
          let productExits = false

          for(let i in cartItems){
             if(cartItems[i].productId === item.product.id){
               cartItems[i].qty++
               productExits=true;
               break;
             }
          }
   
          if(!productExits){
             cartItems.push(new CartItem(item.id, item.product, 1));
           
          }
        }
        
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, { product });
  }
}
