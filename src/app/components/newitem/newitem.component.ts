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
  
  @Input()registerForm: FormGroup;
  

  constructor(private msg: MessangerService, private productService: ProductService, private builder: FormBuilder) { }
  
  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    this.registerForm= this.builder.group({
      productname:['', Validators.required],
      description:['', Validators.required],
      price:['', Validators.required],
      image:['', Validators.required]
      
    }) 
  }
   newItem= new Product(0,"","",0,"");
  // newP: Product;
  addItem(){
    
    this.newItem.name=this.registerForm.get('productname').value;
    this.newItem.description=this.registerForm.get('description').value;
    this.newItem.price=this.registerForm.get('price').value;
    this.newItem.imageurl=this.registerForm.get('image').value;
    // this.newP.description="hiii";
    // this.newP.imageurl="df";
    // this.newP.name="df";
    // this.newP.price=22;
    this.productService.addNewProduct(this.newItem).subscribe(() => {
      //  this.msg.sendMsg(this.newItem)
    })
    
  }
  
}
