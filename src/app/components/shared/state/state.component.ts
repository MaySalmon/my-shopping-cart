import { Component, OnInit } from '@angular/core';
import { productsUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  productList: Product[] = []
  allProductList: Product[] = []
  maxProduct: Product[] = []
  maxnum=0;
  productname:string;
  maxindex=0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    // this.productList = this.productService.getProducts();
      this.productService.getProducts().subscribe((products) =>{
      this.allProductList = products;
      console.log(this.allProductList);
      for(let k=0; k<5;k++){
        this.maxnum=0;
        this.maxindex=0;
        this.productname="";
        for(let i=0; i<this.allProductList.length; i++){
          if(this.allProductList[i].price>this.maxnum)
          {
            this.maxnum=this.allProductList[i].price;
            this.productname=this.allProductList[i].name;
            this.maxindex=i;
          }
        }
        for(let j=0; j<this.allProductList.length; j++)
        {
          if(j == this.maxindex)
          {
            this.productList.push(this.allProductList[j]);
            this.allProductList.splice(j , 1);
            break;
          }
        }
      }
      this.maxProduct.push(this.productList[0]);
      
      })
    }
}




 


