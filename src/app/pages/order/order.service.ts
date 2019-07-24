import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';
import { Order } from '../../models/order.model';

@Injectable()
export class OrderService {

  constructor(private mainSer: MainService) { }
  getPaginationObject(limit, offset, myFilter, callback) {
    var filter = { "limit": limit, "offset": offset }
    if (myFilter != null) {
      for (var key in myFilter) {
        if (myFilter[key] != null)
          filter[key] = myFilter[key]
      };
    }
    this.mainSer.APIServ.get({ "index": "orders", "filter": filter, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, Order.arrayconstructor(data.results), data.count)
      }, error => {
        callback(error, null)
      })
  }

  cancelOrder(id, callback) {
    this.mainSer.APIServ.put({ "index": "cancelOrders", "variables": { "id": id }},{})
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }


}
