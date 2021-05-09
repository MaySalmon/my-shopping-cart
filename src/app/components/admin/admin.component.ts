import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { HttpClient } from '@angular/common/http'
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  closeResult: string;
  productList: Product[] = []
  wishlist: number[]= []
  @Input()registerForm: FormGroup;

  constructor(private router:Router,private modalService: NgbModal  ,private httpClient: HttpClient, private productService: ProductService, private builder: FormBuilder) { }

  ngOnInit() {
    this.loadProducts();
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
  loadProducts(){
// this.productList = this.productService.getProducts();
  this.productService.getProducts().subscribe((products) =>{
  this.productList = products;
  
  })

}

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

newItem= new Product(0,"","",0,""); //default parameters
 
  addItem(){
    
    this.newItem.name=this.registerForm.get('productname').value;
    this.newItem.description=this.registerForm.get('description').value;
    this.newItem.price=this.registerForm.get('price').value;
    this.newItem.imageurl=this.registerForm.get('image').value;
    
    this.productService.addNewProduct(this.newItem).subscribe(() => {
      //  this.msg.sendMsg(this.newItem)
    })
    window.location.reload();
  }

}