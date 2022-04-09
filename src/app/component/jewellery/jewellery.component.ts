import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: '../products/products.component.html',
  styleUrls: ['../products/products.component.scss']
})
export class JewelleryComponent implements OnInit {

  public productList: any; //only jewellery items

  constructor(private api:ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res.filter((p:any) => p.category.includes('jewelery'));

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price});
      });
    })
  }

  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

}
