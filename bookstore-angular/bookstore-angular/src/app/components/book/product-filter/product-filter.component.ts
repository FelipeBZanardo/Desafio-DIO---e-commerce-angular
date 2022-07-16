import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<Array<number>>();

  constructor(private productService: ProductsService) { }

  minimo: number = 0;
  maximo: number = 99999999999999;

  ngOnInit(): void {
    this.filter.emit([this.minimo, this.maximo]);
  }

  filterMin(min: any){
    this.minimo = min;
    this.filter.emit([this.minimo, this.maximo]);
    console.log(this.minimo)
  }

  filterMax(max: any){
    this.maximo = max;
    this.filter.emit([this.minimo, this.maximo]);
    console.log(this.maximo)
  }
}
