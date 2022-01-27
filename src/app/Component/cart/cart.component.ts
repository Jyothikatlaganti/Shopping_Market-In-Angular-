import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product:any=[];
  public grandtotal :number =0;
  constructor(private cardservice:CartService) { }

  ngOnInit(): void {
    this.cardservice.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandtotal = this.cardservice.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cardservice.removeCartItem(item);
  }
  emptycart(){
    this.cardservice.removeAllCart();
  }

}
