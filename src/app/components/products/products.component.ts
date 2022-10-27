import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Products } from 'src/app/Model/Products.Model';
import { ProductsService } from 'src/app/Services/Products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products:Products[]=[];
  constructor(private ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.GetProducts()
    .subscribe({
      next:(Products)=>
      {
        this.Products=Products;
      },
      error:(Response)=>
      {
        console.log(Response);
      }
    })
  }

}
