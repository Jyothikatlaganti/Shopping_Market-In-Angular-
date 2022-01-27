import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist:any;
  searchKey:string="";
  public filtercategory:any;
  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.productlist = res;
      this.filtercategory=res;
      this.productlist.forEach((a:any)=>{
        if(a.category==="men's clothing" || a.category==="women's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      })
      console.log(this.productlist);
    });
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
  addingToCart(item:any){
    this.cartservice.addtoCart(item);
  }
  filter(category:string){
    this.filtercategory=this.productlist.filter((a:any)=>{
      if(a.category==category|| category==""){
        return a;
      }
    })
  }
}
