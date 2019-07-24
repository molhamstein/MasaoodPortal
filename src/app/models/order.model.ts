import { Center } from "./center.model";

export class Order {
  id: number;
  centerId: string;
  center: Center;
  deliveryAddress: string
  deliveryLat: number
  devliveryLng: number
  createdAt: Date;
  canceledAt: Date;
  deliveredAt: Date;
  assignedAt: Date;
  total: number;
  userId: number;
  products: any[]
  user: any;
  status: string;

  constructor(order) {
    this.id = order.id || null;
    this.userId = order.userId || null;
    this.user = order.user || null;
    this.total = order.total || 0;
    this.centerId = order.centerId || "";
    if (order.center)
      this.center = new Center(order.center) || null;
    this.deliveryAddress = order.deliveryAddress || "";
    this.deliveryLat = order.deliveryLat || 0;
    this.devliveryLng = order.devliveryLng || 0;
    this.canceledAt = order.canceledAt || null;
    this.deliveredAt = order.deliveredAt || null;
    this.createdAt = order.createdAt || null;
    this.assignedAt = order.assignedAt || null;
    this.status = order.status || ""
    this.products = order.products || []
  }

  static arrayconstructor(data: any[]): Order[] {
    var orderObject: Order[] = []
    if (data && data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        orderObject.push(new Order(element));
        if (index + 1 == data.length)
          return orderObject
      }
    else {
      return orderObject
    }
  }


}


export class ProductOrder {
  id: number;
  count: number;
  product: number;
}
