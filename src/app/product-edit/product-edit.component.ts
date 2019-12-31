import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  angForm: FormGroup;
  product: any = {}
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private ps: ProductsService,
    private fb: FormBuilder
    ) {
      this.createForm();
    }
  createForm(){
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
    
  }  

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
        this.angForm.get("ProductName").setValue(this.product.ProductName);
        this.angForm.get("ProductDescription").setValue(this.product.ProductDescription);
        this.angForm.get("ProductPrice").setValue(this.product.ProductPrice);
        });
      });
       
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
      this.router.navigate(['products']);
    });
  }

}
