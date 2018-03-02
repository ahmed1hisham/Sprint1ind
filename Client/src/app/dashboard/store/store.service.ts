import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  private deleteUrl = 'http://localhost:3000/api/product/deleteProduct';
  private updateUrl = 'http://localhost:3000/api/product/updateProduct'

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/api/product/getProducts");
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/product/createProduct",product, httpOptions);
  }

  updateProduct(product, newProduct): Observable<any> {
    return this.http.patch<any>(`${this.updateUrl}/${product._id}`, newProduct, httpOptions);
  }

  deleteProduct(product) {
    return this.http.delete(`${this.deleteUrl}/${product._id}`);
  }


  
}




