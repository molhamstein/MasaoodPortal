import { MainService } from '../../service/main.service';
import { Injectable } from '@angular/core';
import { Groupe } from '../../models/group.model';

@Injectable()
export class GroupService {

  constructor(private mainSer: MainService) {

  }

  getAllObject(callback) {
    this.mainSer.APIServ.get({ "index": "groups" })
      .subscribe((data: any) => {
        callback(null, Groupe.arrayConstructor(data))
      }, error => {
        callback(error, null)
      })
  }

}
