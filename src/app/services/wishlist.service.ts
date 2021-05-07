import { Injectable } from '@angular/core';
import { wishList } from 'src/app/config/api'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  addToWishList(productId){
    return this.http.post(wishList, {id: productId})
  } 

  removeFromWishList(productId){
    return this.http.delete(wishList + '/' + productId);
  }

  getWishList(){
    return this.http.get(wishList).pipe(
      map((result: any[])=>{
        let productIds=[]

        result.forEach(item => productIds.push(item.id))

        return productIds;
      } )
    )
  }
}
