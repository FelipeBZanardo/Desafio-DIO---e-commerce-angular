import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = "https://sheet.best/api/sheets/566d8e19-cb26-46cb-a3af-7fdaf1b6b10c";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.apiUrl);
  }
}
