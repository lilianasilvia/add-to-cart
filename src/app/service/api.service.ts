import { HeaderComponent } from './../component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  public productList:any;

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  /*getAllProducts(): any[] {
    this.getProduct().subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price});
      });
    })
    return this.productList;
  }*/

 }
