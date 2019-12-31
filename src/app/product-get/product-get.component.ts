import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";
import Product from '../Product';

@Component({
  selector: "app-product-get",
  templateUrl: "./product-get.component.html",
  styleUrls: ["./product-get.component.scss"]
})
export class ProductGetComponent implements OnInit {
  products: Product[];
  constructor(private ps: ProductsService) {}
  
  getAllProducts() {
    this.ps.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.getAllProducts();
      this.products = this.products.filter(item => item._id !== id);
    });
  }
}
