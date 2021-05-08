import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  closeResult: string;
  productList: Product[] = []
  wishlist: number[]= []

  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
    
  }

  loadProducts(){
// this.productList = this.productService.getProducts();
  this.productService.getProducts().subscribe((products) =>{
  this.productList = products;
  
  })

}


}