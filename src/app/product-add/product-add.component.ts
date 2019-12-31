import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductsService, private router: Router) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }
  addProduct(ProductName: string, ProductDescription: string, ProductPrice: BigInteger){
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
    this.router.navigate(["products"]);
  }
  ngOnInit() {
  }

}
