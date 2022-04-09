import { HeaderComponent } from './../header/header.component';
import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;

  constructor(private api:ApiService, private cartService:CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm']){
        this.api.getProduct().subscribe(res=>{
          this.productList = res.filter((p:any) => p.title.toLowerCase().includes(params['searchTerm'].toLowerCase()));

          this.productList.forEach((a:any) => {
            Object.assign(a, {quantity:1, total:a.price});
          });
        })
      }
      else{
        this.api.getProduct().subscribe(res=>{
          this.productList = res;

          this.productList.forEach((a:any) => {
            Object.assign(a, {quantity:1, total:a.price});
          });
        })
      }
          
     })
  } 

  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }
}
