import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item'
import { Router } from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItems = [
     // id: 1, productId: 1,productName:'test1',qty: 4, price: 100},
    // { id: 2, productId: 3,productName:'test2',qty: 2, price: 10},
    // { id: 3, productId: 2,productName:'test3',qty: 4, price: 1050},
    
  ];

  cartTotal = 0
  cartTotalNum=0

  constructor(private router:Router, private msg: MessangerService,private cartService: CartService) { }
  
  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }


  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();

      });
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[])=>{
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

 
  calcCartTotal(){
    this.cartTotal =0
    if(this.cartItems.length === 0)
    {
      this.cartTotalNum=0;
    }
    else{
      this.cartTotalNum++;
    }
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
    
  }

  clearcart(){
    this.cartService.deleteCartItems();
    window.location.reload();

  }

  

}
