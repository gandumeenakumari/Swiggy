import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Products } from 'src/app/Model/Products.Model';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title="Products Data";
  Products:Products[]=[];
  constructor(private productsservice:ProductsService) { }

  ngOnInit(): void {
    this.GetAllProducts();
  }
  GetAllProducts()
  {
    this.productsservice.GetAllProducts().subscribe(
      response=>
      {
        this.Products=response;
        console.log(response);
      }
    )
  }
    
  

}
