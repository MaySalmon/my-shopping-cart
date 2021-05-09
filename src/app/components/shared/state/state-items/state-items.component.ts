import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessangerService } from 'src/app/services/messanger.service'

@Component({
  selector: 'app-state-items',
  templateUrl: './state-items.component.html',
  styleUrls: ['./state-items.component.css']
})
export class StateItemsComponent implements OnInit {
  @Input()productItem: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
