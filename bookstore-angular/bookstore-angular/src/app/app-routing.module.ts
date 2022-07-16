import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/book/product-list/product-list.component';
import { AboutComponent } from './pages/about/about.component';
import { CarComponent } from './pages/car/car.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'car', component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
