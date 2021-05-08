import { Component, OnInit , Input} from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product'
import { MessangerService } from 'src/app/services/messanger.service'
import { ProductService } from 'src/app/services/product.service'
import {Router } from '@angular/router'
@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {
  
  @Input()productItem: Product;
 productList: Product[]=[];
  constructor(private router: Router, private msg: MessangerService ,private productService: ProductService) { }

  ngOnInit(): void {
  }


  onSelect(productItem){
    this.router.navigate(['/edititem', productItem.id])
  }

  deleteItem(){
    this.productService.deleteItemFromList(this.productItem).subscribe(()=>{
    });
    
  }

  
}

  


