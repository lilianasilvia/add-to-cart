import { ApiService } from './../../service/api.service';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './../../service/cart.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0;

  @ViewChild('searchWord') headerComponent?: ElementRef;

  constructor(private cartService: CartService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItems = res.length;
    })
  }

  getWord(){
    return this.headerComponent?.nativeElement.value;
  }

}
