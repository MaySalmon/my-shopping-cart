import { Component, OnInit,Input } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'
import { MessangerService } from 'src/app/services/messanger.service'
import { ActivatedRoute } from '@angular/router'
import { productsUrl } from 'src/app/config/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  @Input()registerForm: FormGroup;

  clickedProduct: Product;
  
  constructor(private route: ActivatedRoute, private msg: MessangerService, private productService: ProductService, private builder: FormBuilder) { }
 
  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.productService.getParticular(id);
    // console.log("back from"); 
  
   
    this.productService.getParticular(+id).subscribe(data => {
      console.log(data);
    })
  }

}

  

