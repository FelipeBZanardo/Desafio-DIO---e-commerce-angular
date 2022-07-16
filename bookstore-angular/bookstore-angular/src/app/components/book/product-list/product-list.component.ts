import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Book> = [];
  productsFilter: Array<Book> = [];
  minimo: number = 0;
  maximo: number = 999999999999;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.productService.getUsers().subscribe(lista => {
      this.products = lista;
      this.productsFilter = lista;
    })
  }

  valoresFiltro(event:Array<number>){
    if (!event[0]){
      event[0] = 0;
    }
    if (!event[1]){
      event[1] = 999999999;
    }
    this.minimo = event[0];
    this.maximo = event[1];
    console.log("pai recebeu",event);
    console.log("produtos", this.productsFilter);
    /*this.productsFilter = this.products.filter(function(obj){ 
      return (obj.price == );
    })*/
    this.productsFilter = this.filtro(this.products, this.minimo, this.maximo)
  }

  filtro(arr: Array<Book>, min: number = 0, max: number = 999999999): Array<Book>{
    let novoArray: Array<Book> = [];
    for (let i = 0 ; i < arr.length ; i++){
      if (arr[i].price >= min*100 && arr[i].price <= max*100){
        novoArray.push(arr[i]);
      }
    }
    return novoArray;
  };


}
