import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  tableData: any[];
  divaya=false;
  divaya2=false;
  xName: String = "";
  xPrice: Number = 0;
  xSeller: String = "";
  xProduct: any;
  constructor(private storeService: StoreService) { }

  ngOnInit() {

    this.getProducts();
  }


  reload(): void{
    this.storeService.getProducts()
      .subscribe(function(prods) {
        this.tableData = prods.data;
        this.tableData = this.tableData.filter(function(element, index, array){
          return element.sellerName === 'H';
        });
      });
  };

  
  getProducts(): void {
    var self = this;
    this.storeService.getProducts()
      .subscribe(function(prods) {
        self.tableData = prods.data;
        self.tableData = self.tableData.filter(function(element, index, array){
          return element.sellerName === 'H';
        });
      });
  }

  updateProduct(newProduct): void{
    const product = this.xProduct;
    this.storeService.updateProduct(product,newProduct).subscribe(() => console.log('Product Updated!'));
    this.getProducts();
  }


  createProduct(dproduct: any): void {
    var self = this;
    this.storeService.createProduct(dproduct).subscribe(() => console.log('Product Created!'));
    this.getProducts();
  }



  deleteProduct(dProduct): void{
    this.tableData = this.tableData.filter(product => product._id !== dProduct._id);
    this.storeService.deleteProduct(dProduct).subscribe(() => console.log('Product Deleted!'));

  }



  showDivaya(): void{
    this.divaya=true;
  }

  showDivaya2(product): void{
    this.xName = product.name;
    this.xPrice = product.price;
    this.xSeller = product.sellerName;
    this.xProduct = product;
    this.divaya2=true;
  }

  sheelDivaya(): void{
    this.divaya=false;
  }

  sheelDivaya2(): void{
    this.divaya2=false;
  }


}
