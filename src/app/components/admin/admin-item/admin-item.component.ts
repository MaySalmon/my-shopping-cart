import { Component, OnInit , Input} from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessangerService } from 'src/app/services/messanger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {
  
  @Input()productItem: Product;
  
  constructor(private msg: MessangerService ) { }

  ngOnInit(): void {
  }

}

  


