import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";
import { ActivatedRoute, Router } from "@angular/router";
import Product from '../Product';

@Component({
  selector: "app-product-get",
  templateUrl: "./product-get.component.html",
  styleUrls: ["./product-get.component.scss"]
})
export class ProductGetComponent implements OnInit {
  products: Product[];
  sham: string;
  constructor(private ps: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.sham = Date();
  }
  
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
      // debugger
      console.log(this.sham);
      this.getAllProducts();
      //this.products = this.products.filter(item => item._id !== id);
    });
  }
}
