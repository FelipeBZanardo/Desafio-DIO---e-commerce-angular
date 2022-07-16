import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProductItemComponent } from './components/book/product-item/product-item.component';
import { ProductListComponent } from './components/book/product-list/product-list.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductFilterComponent } from './components/book/product-filter/product-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { CarComponent } from './pages/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductListComponent,
    FooterComponent,
    ProductFilterComponent,
    AboutComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
