import { Center } from './../../models/center.model';
import { MainService } from '../../service/main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CenterService {

  constructor(private mainSer: MainService) { }


  getOneObject(id, callback) {
    this.mainSer.APIServ.get({ "index": "oneCenters", "variables": { "id": id } })
      .subscribe((data: any) => {
        callback(null, new Center(data))
      }, error => {
        callback(error, null)
      })
  }


  createCenter(data, callback) {
    this.mainSer.APIServ.post({ "index": "centers" }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }

  updateCenter(data, id, callback) {
    delete data.id
    this.mainSer.APIServ.put({ "index": "oneCenters", "variables": { "id": id } }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }


  getPaginationObject(limit, offset, callback) {
    var filter = { "limit": limit, "offset": offset }
    this.mainSer.APIServ.get({ "index": "centers", "filter": filter, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, Center.arrayConstructor(data.results), data.count)
      }, error => {
        callback(error, null)
      })
  }

  getAllObject(callback) {
    this.mainSer.APIServ.get({ "index": "centers", "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, Center.arrayConstructor(data))
      }, error => {
        callback(error, null)
      })
  }


}
