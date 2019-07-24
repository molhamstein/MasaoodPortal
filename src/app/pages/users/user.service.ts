import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private mainSer: MainService) {

  }

  getPaginationObject(limit, offset, callback) {
    this.mainSer.APIServ.get({ "index": "users", "filter": { "limit": limit, "offset": offset, "is_staff__in": false }, "ordering": "-createdAt" })
      .subscribe((data: any) => {
        callback(null, data.results, data.count)
      }, error => {
        callback(error, null)
      })
  }

}
