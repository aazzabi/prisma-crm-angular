import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../models/orderModule/ProductModel';
import {CartsService} from '../../services/carts.service';
import {CartModel} from '../../models/orderModule/CartModel';
import {ProductCartRow} from '../../models/orderModule/ProductCartRow';

@Component({
  selector: 'app-products-index-front-content',
  templateUrl: './products-index-front-content.component.html',
  styleUrls: ['./products-index-front-content.component.scss']
})
export class ProductsIndexFrontContentComponent implements OnInit {

  products: Array<ProductModel> = new Array<ProductModel>();
  carts: Array<CartModel> = new Array<CartModel>();
  currentCart: CartModel;

  constructor(private service: CartsService) {
    this.service.fetchProducts().subscribe((e) => {
      this.products = e;
      console.log(this.products);
    });
    this.service.fetchCartsForAClient(1).subscribe((e) => {
      this.carts = e;
      console.table(e);
      if (this.carts.length === 0) {
        // Creating a new cart :
        this.service.createClientCart(1).subscribe((e) => {
          this.carts.push(e);
          console.log(this.carts.length);
          this.currentCart = e;
          this.service.changeCurrentCart(this.currentCart);
          sessionStorage.setItem('cart', JSON.stringify(this.currentCart));
        });
      } else {
        this.currentCart = this.carts[0];
        console.log('Cart already Exist');
        this.service.changeCurrentCart(this.currentCart);
        this.service.getCartRows(this.currentCart).subscribe(data => {
        console.table(data);
        this.currentCart.rows=data;
          sessionStorage.setItem('cart', JSON.stringify(this.currentCart));
        });
        sessionStorage.setItem('cart', JSON.stringify(this.currentCart));

      }
    });
  }

  ngOnInit() {

  }

  createCart() {

  }


}
