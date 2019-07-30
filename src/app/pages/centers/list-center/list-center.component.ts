import { appError } from './../../../models/app-error.model';
import { Center } from './../../../models/center.model';
import { MainService } from './../../../service/main.service';
import { CenterService } from './../center.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-center',
  templateUrl: './list-center.component.html',
  styleUrls: ['./list-center.component.css']
})
export class ListCenterComponent implements OnInit {

  public limit: number = 10
  public offset: number = 0
  public count: number = 0
  arrayCenter: Center[] = []
  public languageKey = this.mainSer.globalServ.getLanguageKey()

  fields = [
    { "key": "nameAr", "label": "GLOBAL.NAME_AR", "type": "string" },
    { "key": "nameEn", "label": "GLOBAL.NAME_EN", "type": "string" },
    { "key": "statesCount", "label": "GLOBAL.STATESCOUNT", "type": "price" },
    {
      "type": "buttons", "label": "", "buttons": [
        { "action": "edit", "label": "GLOBAL.EDIT" },
        { "action": "show", "label": "GLOBAL.SHOW" }
      ]
    }
  ]
  constructor(private centerSer: CenterService, private mainSer: MainService) { }

  ngOnInit() {
    this.getData()
  }

  addCenter() {
    this.mainSer.globalServ.goTo('add-center')
  }

  changePages(page) {
    console.log(page);
    this.offset = (page - 1) * this.limit;
    this.getData()
  }
  getData() {
    var self = this;
    self.centerSer.getPaginationObject(self.limit, self.offset, function (err: appError, data, count) {
      if (err)
        return err.returnMessage()
      self.arrayCenter = data;
      self.count = count;
    })
  }

  action(data) {
    if (data.event == 'edit') {
      this.mainSer.globalServ.goTo("edit-center/" + data.id)
    }
    else if (data.event == 'show') {
      this.mainSer.globalServ.goTo("show-center/" + data.id)
    }

  }

}
