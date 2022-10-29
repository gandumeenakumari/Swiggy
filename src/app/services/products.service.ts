import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../Model/Products.Model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl:string=environment.baseApiUrl;
  
  constructor(private http:HttpClient) { }
  GetAllProducts():Observable<Products[]>
  {
    
    return this.http.get<Products[]>(this.baseApiUrl+'/api/Products');
    
    }
  AddProducts(products:Products):Observable<Products>
  {
    return this.http.post<Products>(this.baseApiUrl+'/api/Products',products);
  }
}
