import { Size } from './../../models/size.model';
import { Injectable } from '@angular/core';
import { MainService } from '../../service/main.service';

@Injectable()
export class SizeService {

  constructor(private mainSer: MainService) {

  }


  
  getAllSize(callback) {
    this.mainSer.APIServ.get({ "index": "size" })
      .subscribe((data: any) => {
        callback(null, Size.arrayConstructor(data))
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }
}
