import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = []
  constructor(private productService: ProductService) {
    debugger
  }

  ngOnInit(): void {
    debugger
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res
        this.loading = false
      },
      error: (error) => {
        this.loading = false
        alert(error)
      },
      complete: () => {

      },
    })
  }

  getCategories() {
    this.loading = true
    this.productService.getAllCategories().subscribe({
      next: (res: any) => {
        this.categories = res
        this.loading = false
      },
      error: (error: any) => {
        this.loading = false
        alert(error)
      },
      complete: () => {

      },
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsCategory(value)

  }
  getProductsCategory(keyword: string) {
    this.loading = true
    this.productService.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false
      this.products = res
    })
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert("Product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

}
