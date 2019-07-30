import { CenterProduct } from './../../models/center-product.model';
import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CenterProductService {

  constructor(private mainSer: MainService) { }
  getPaginationObjectByCenter(limit, offset, centerId, callback) {
    this.mainSer.APIServ.get({ "index": "centersProducts", "filter": { "limit": limit, "offset": offset, "center": centerId }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        console.log(data.results);
        callback(null, CenterProduct.arrayConstructor(data.results), data.count)
      }, error => {
        callback(error, null)
      })
  }


  getOneObject(id, callback) {
    this.mainSer.APIServ.get({ "index": "oneCentersProducts", "variables": { "id": id } })
      .subscribe((data: any) => {
        callback(null, new CenterProduct(data))
      }, error => {
        callback(error, null)
      })
  }

  createAbstractProduct(data, callback) {
    this.mainSer.APIServ.post({ "index": "centersProducts" }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }

  updateAbstractProduct(data, id, callback) {
    delete data.id
    this.mainSer.APIServ.put({ "index": "oneCentersProducts", "variables": { "id": id } }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }


}
