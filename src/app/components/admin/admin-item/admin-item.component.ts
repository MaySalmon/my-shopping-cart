import { Component, OnInit , Input} from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product'
import { MessangerService } from 'src/app/services/messanger.service'
import { ProductService } from 'src/app/services/product.service'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import {Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {
  
closeResult: string;
@Input()productItem: Product;
 productList: Product[]=[];
  constructor(private modalService: NgbModal  ,private httpClient: HttpClient,private router: Router, private msg: MessangerService ,private productService: ProductService) { }

  ngOnInit(): void {
  }


  onSelect(productItem){
    this.router.navigate(['/edititem', productItem.id])
  }

  deleteItem(){
    this.productService.deleteItemFromList(this.productItem).subscribe(()=>{
    });
    window.location.reload();
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
}

  


