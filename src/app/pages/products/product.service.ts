import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {

  constructor(private mainSer: MainService) {

  }

  getPaginationObjectByAbstract(limit, offset, abstractId, callback) {
    this.mainSer.APIServ.get({ "index": "products", "filter": { "limit": limit, "offset": offset, "abstractProduct__in": abstractId }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, Product.arrayconstructor(data.results), data.count)
      }, error => {
        callback(error, null)
      })
  }


  getOneObject(id, callback) {
    this.mainSer.APIServ.get({ "index": "oneProducts", "variables": { "id": id } })
      .subscribe((data: any) => {
        callback(null, new Product(data))
      }, error => {
        callback(error, null)
      })
  }

  createAbstractProduct(data, callback) {
    this.mainSer.APIServ.post({ "index": "products" }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }

  updateAbstractProduct(data, id, callback) {
    delete data.id
    this.mainSer.APIServ.put({ "index": "oneProducts", "variables": { "id": id } }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }
}
