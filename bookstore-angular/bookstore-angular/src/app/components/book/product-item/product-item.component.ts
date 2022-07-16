import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() livro!: Book;

  detalhes: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  exibirDetalhes(){
    this.detalhes ? this.detalhes=false : this.detalhes=true;
    console.log(this.detalhes)
  }

}
