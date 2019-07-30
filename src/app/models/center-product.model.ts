import { Product } from "./product.model";

export class CenterProduct {
  id: number;
  count: number;
  createdAt: Date;
  productId: number
  product: Product

  constructor(CenterProduct) {
    this.id = CenterProduct.id || null;
    this.count = CenterProduct.count || 0;
    this.createdAt = CenterProduct.createdAt || new Date();
    this.product = new Product(CenterProduct.product);
    this.productId = this.product.id || CenterProduct.productId || 0;
  }

  static arrayConstructor(data: any[]): CenterProduct[] {
    console.log("data")
    console.log(data)
    var centerProductObject: CenterProduct[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        centerProductObject.push(new CenterProduct(element));
        if (index + 1 == data.length)
          return centerProductObject
      }
    else {
      return centerProductObject
    }
  }

}

