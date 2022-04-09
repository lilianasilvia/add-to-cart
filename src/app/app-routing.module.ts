import { SearchComponent } from './component/search/search.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './component/fashion/fashion.component';
import { JewelleryComponent } from './component/jewellery/jewellery.component';


const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'products/electronics', component: ElectronicsComponent},
  {path:'products/fashion', component: FashionComponent},
  {path:'products/jewellery', component: JewelleryComponent},
  {path:'search/:searchTerm', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
