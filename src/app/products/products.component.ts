import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  img = "https://5.imimg.com/data5/SELLER/Default/2022/9/FS/JH/VO/39389397/transparent-bath-soap-1000x1000.jpeg";
  products: Product[] = [
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
    { name: "Soap", price:43, image: this.img},
  ]

}

