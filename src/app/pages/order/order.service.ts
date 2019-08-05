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
    this.mainSer.APIServ.put({ "index": "cancelOrders", "variables": { "id": id } }, {})
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }

  assignOrder(id, centerId, callback) {
    this.mainSer.APIServ.put({ "index": "assignOrders", "variables": { "id": id } }, { "center": centerId })
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }


  deliverOrder(id, callback) {
    this.mainSer.APIServ.put({ "index": "deliverOrders", "variables": { "id": id } }, {})
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }


  deliveringOrder(id, callback) {
    this.mainSer.APIServ.put({ "index": "deliveringOrders", "variables": { "id": id } }, {})
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }


  packOrder(id, callback) {
    this.mainSer.APIServ.put({ "index": "packOrders", "variables": { "id": id } }, {})
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }

  changeOrder(type, id, data, callback) {
    this.mainSer.APIServ.put({ "index": type, "variables": { "id": id } }, data)
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }

  archiveOrder(id, callback) {
    this.mainSer.APIServ.put({ "index": "archiveOrders", "variables": { "id": id } }, {})
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }

  deleteOrder(id, callback) {
    this.mainSer.APIServ.delete({ "index": "oneOrders", "variables": { "id": id } })
      .subscribe((data: any) => {
        callback(null, {})
      }, error => {
        callback(error, null)
      })
  }



}
