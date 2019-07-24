import { MainService } from './../../service/main.service';
import { Injectable } from '@angular/core';
import { Grade } from '../../models/grade.model';

@Injectable()
export class GradeService {


  constructor(private mainSer: MainService) {

  }


  
  getAllGrade(callback) {
    this.mainSer.APIServ.get({ "index": "grade" })
      .subscribe((data: any) => {
        callback(null, Grade.arrayConstructor(data))
        callback(null, data)
      }, error => {
        callback(error, null)
      })
  }


}
