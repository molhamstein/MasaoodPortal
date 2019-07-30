import { AbstractProduct } from './../../models/abstract-product.model';
import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AbstractProductService {

  constructor(private mainSer: MainService) {

  }

  getObjectByName(name, callback) {
    this.mainSer.APIServ.get({ "index": "abstractProducts", "filter": { "nameEn__icontains": name }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }
  getPaginationObject(limit, offset, callback) {
    this.mainSer.APIServ.get({ "index": "abstractProducts", "filter": { "limit": limit, "offset": offset }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, AbstractProduct.arrayConstructor(data.results), data.count)
      }, error => {
        callback(error, null)
      })
  }


  getOneObject(id, callback) {
    this.mainSer.APIServ.get({ "index": "oneAbstractProducts", "variables": { "id": id } })
      .subscribe((data: any) => {
        callback(null, new AbstractProduct(data))
      }, error => {
        callback(error, null)
      })
  }

  createAbstractProduct(data, imagesArray, callback) {
    data.imagesId = [];
    imagesArray.forEach(element => {
      data.imagesId.push(element.id)
    });
    this.mainSer.APIServ.post({ "index": "abstractProducts" }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }

  updateAbstractProduct(data, imagesArray, id, callback) {
    data.imagesId = [];
    imagesArray.forEach(element => {
      data.imagesId.push(element.id)
    });
    delete data.id
    this.mainSer.APIServ.put({ "index": "oneAbstractProducts", "variables": { "id": id } }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }


}
