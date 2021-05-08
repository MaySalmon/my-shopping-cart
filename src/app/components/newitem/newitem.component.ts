import { Component, OnInit , Input} from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'
import { MessangerService } from 'src/app/services/messanger.service'

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {
  
  registerForm: FormGroup;
  

  constructor(private msg: MessangerService, private productService: ProductService, private builder: FormBuilder) { }
  
  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    this.registerForm= this.builder.group({
      productname:['', Validators.required],
      description:['', [Validators.required, Validators.email]],
      price:['', Validators.required],
      image:['', Validators.required]
      
    }) 
  }
  newItem= new Product(8,"","",2,"");

  addItem(){
    console.log(this.registerForm);
    this.productService.addNewProduct(this.newItem).subscribe(() => {
      this.msg.sendMsg(this.newItem)
    })
    
  }
  
}
