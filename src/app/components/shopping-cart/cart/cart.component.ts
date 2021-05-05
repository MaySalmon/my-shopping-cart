import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service'
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [
    // { id: 1, productId: 1,productName:'test1',qty: 4, price: 100},
    // { id: 2, productId: 3,productName:'test2',qty: 2, price: 10},
    // { id: 3, productId: 2,productName:'test3',qty: 4, price: 1050},
    
  ];

  cartTotal = 0


  constructor( private msg: MessangerService) { }
  
  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
    this.addProductToCart(product)
    });

  }
  addProductToCart(product: Product){
    
    let productExits = false

      for(let i in this.cartItems){
         if(this.cartItems[i].productId === product.id){
           this.cartItems[i].qty++
           productExits=true;
           break;
         }
    }

    if(!productExits){
          this.cartItems.push({
         productId: product.id,
         productName: product.name,
         qty:1,
         price: product.price
       })
    }
    

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
