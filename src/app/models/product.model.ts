import { AbstractProduct } from './abstract-product.model';
import { Size } from "./size.model";

export class Product {
  id: number;
  code: string;
  status: string;
  price: number;
  sizeId: number;
  abstractProductId: number;
  size: Size;
  abstractProduct: AbstractProduct;


  constructor(product) {
    this.id = product.id || null;
    this.code = product.code || "";
    this.status = product.status || "";
    this.price = product.price || "";
    this.size = new Size(product.size) || null;
    this.abstractProduct = new AbstractProduct(product.abstractProduct) || null;
    this.sizeId = product.sizeId || this.size.id || "";
    this.abstractProductId = product.abstractProductId || this.abstractProduct.id || "";
  }

  static arrayconstructor(data: any[]): Product[] {
    var productObject: Product[] = []
    if (data && data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        productObject.push(new Product(element));
        if (index + 1 == data.length)
          return productObject
      }
    else {
      return productObject
    }
  }


}

