import { User } from './../../models/user.model';
import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private mainSer: MainService) {

  }

  getOneObject(id, callback) {
    this.mainSer.APIServ.get({ "index": "users", "variables": { "id": id } })
      .subscribe((data: any) => {
        callback(null, new User(data))
      }, error => {
        callback(error, null)
      })
  }
  getPaginationObject(limit, offset, callback) {
    this.mainSer.APIServ.get({ "index": "users", "filter": { "limit": limit, "offset": offset, "is_staff__in": false }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, data.results, data.count)
      }, error => {
        callback(error, null)
      })
  }

  getPaginationObjectStaf(limit, offset, callback) {
    this.mainSer.APIServ.get({ "index": "users", "filter": { "limit": limit, "offset": offset, "is_staff__in": false }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, data.results, data.count)
      }, error => {
        callback(error, null)
      })
  }


  createUser(data, callback) {
    data.groupsId = [parseInt(data.groupId)];
    // imagesArray.forEach(element => {
    //   data.imagesId.push(element.id)
    // });
    delete data.groupId
    this.mainSer.APIServ.post({ "index": "users" }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }

  updateAbstractProduct(data, id, callback) {
    // data.imagesId = [];
    // imagesArray.forEach(element => {
    //   data.imagesId.push(element.id)
    // });
    delete data.id
    this.mainSer.APIServ.put({ "index": "users", "variables": { "id": id } }, data)
      .subscribe((data: any) => {
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }

}
