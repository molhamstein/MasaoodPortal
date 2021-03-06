import { appError } from './../../../models/app-error.model';
import { MainService } from './../../../service/main.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public limit: number = 10
  public offset: number = 0
  public count: number = 0
  arrayUsers: any[] = []
  public languageKey = this.mainSer.globalServ.getLanguageKey()

  fields = [
    { "key": "first_name", "label": "GLOBAL.FIRST_NAME", "type": "string" },
    { "key": "mobile", "label": "GLOBAL.MOBILE", "type": "string" },
    { "key": "date_joined", "label": "GLOBAL.DATEJOINED", "type": "date" },
  ]

  filter = { "groups__name__in": "user", "mobile__icontains": "" }
  constructor(private userSer: UserService, private mainSer: MainService) { }

  ngOnInit() {
    this.getData()
  }

  getFilter() {
    this.offset = 0
    this.count = 0
    this.getData()
  }

  changePages(page) {
    console.log(page);
    this.offset = (page - 1) * this.limit;
    this.getData()
  }
  getData() {
    var self = this;
    self.userSer.getPaginationObject(self.limit, self.offset, self.filter, function (err: appError, data, count) {
      if (err)
        return err.returnMessage()
      self.arrayUsers = data;
      self.count = count;
    })
  }

  changeValueParent(event) {
    this.filter.mobile__icontains = event;
    this.getFilter()
  }

  action(data) {
    if (data.event == 'edit') {
      this.mainSer.globalServ.goTo("edit-abstract-product/" + data.id)
    }
    else if (data.event == 'show') {
      this.mainSer.globalServ.goTo("show-abstract-product/" + data.id)
    }
  }

  addUser() {
    this.mainSer.transfereSer.setData({ "isFromUser": true })
    this.mainSer.globalServ.goTo("add-user")
  }

}
