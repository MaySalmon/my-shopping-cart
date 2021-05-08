import { Component, OnInit,Input } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'
import { MessangerService } from 'src/app/services/messanger.service'
import { ActivatedRoute,Router } from '@angular/router'
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

  @Input()clickedProduct= new Product(0,"","",0,"");
  
  constructor(private router:Router,private route: ActivatedRoute, private msg: MessangerService, private productService: ProductService, private builder: FormBuilder) { }
 
  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    
    this.productService.getParticular(+id).subscribe(data => {
      console.log(data);
      this.fetchToLocal(data);

    })
   
  }

 
  
      
 
  
  fetchToLocal(data){
    this.clickedProduct.id = data.id;
    this.clickedProduct.description = data.description;
    this.clickedProduct.price = data.price;
    this.clickedProduct.imageurl=data.imageurl;
    this.clickedProduct.name= data.name;

    this.registerForm= this.builder.group({
      productname:[this.clickedProduct.name, Validators.required],
      description:[this.clickedProduct.description, Validators.required],
      price:[this.clickedProduct.price, Validators.required],
      image:[this.clickedProduct.imageurl, Validators.required]
     })
  }


  saveChanges(){
    this.clickedProduct.description = this.registerForm.get('description').value;
    this.clickedProduct.name = this.registerForm.get('productname').value;
    this.clickedProduct.imageurl = this.registerForm.get('image').value;
    this.clickedProduct.price = this.registerForm.get('price').value;
    this.productService.updatePost( this.clickedProduct.id,this.clickedProduct);
    this.router.navigate(['/shop']);
  }
}


