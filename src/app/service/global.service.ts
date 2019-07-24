import { AppDirectionService } from './app-direction.service';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class GlobalService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private translateSer: TranslateService, public directionSer: AppDirectionService) {
  }

  getByStringKey(object,stringKey){
    return _.at(object, stringKey);

  }

  goTo(newURL: String) {
    this.router.navigate([newURL]);
  }
  reload() {
    location.reload();
  }

  formatDate(date, withTime = true) {
    var tempDate = new Date(date);

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = tempDate.getDate();
    var monthIndex = tempDate.getMonth();
    var year = tempDate.getFullYear();
    if (withTime)
      return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + tempDate.getHours() + ":" + tempDate.getMinutes();
    else
      return day + ' ' + monthNames[monthIndex] + ' ' + year
  }

  getLanguageKey() {
    var langObj = this.directionSer.getLangAndDir();
    if (langObj.lang == 'en')
      return { "name": "nameEn", "description": "descriptionEn" }
    else
      return { "name": "nameAr", "description": "descriptionAr" }
  }

  translate(key: string[], callback) {
    this.translateSer.get(key).subscribe((value: string[]) => {
      return callback(value)
    })
  }


}
