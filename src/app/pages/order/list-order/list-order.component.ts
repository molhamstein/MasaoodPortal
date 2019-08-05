import { DialogService } from './../../../service/dialog.service';
import { appError } from './../../../models/app-error.model';
import { MainService } from './../../../service/main.service';
import { OrderService } from './../order.service';
import { Order } from './../../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { SelectDropdownComponent } from 'ng-select/select-dropdown.component';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  public limit: number = 10
  public offset: number = 0
  public count: number = 0
  arrayOrder: Order[] = []
  public languageKey = this.mainSer.globalServ.getLanguageKey()
  public roleType = this.mainSer.authServ.getRole()


  // Filter
  public filter = { "status__in": null, "createdAt__gt": null, "createdAt__lt": null, "center__in": null }
  public statusFilter = []

  public dateFilter = [
    { "label": "FROM", "type": "from", "value": null },
    { "label": "TO", "type": "to", "value": null },
  ]

  clearFilter() {
    this.filter = { "status__in": null, "createdAt__gt": null, "createdAt__lt": null, "center__in": null }
    this.dateFilter = [
      { "label": "FROM", "type": "from", "value": null },
      { "label": "TO", "type": "to", "value": null },
    ]
    this.offset = 0
    this.count = 0
    this.getData()
  }

  changeStatusParent(event) {
    this.filter['status__in'] = event;
    this.offset = 0
    this.count = 0
    this.getData()

  }

  changeDateParent(event) {
    if (event[0].value != null)
      this.filter['createdAt__gt'] = new Date(event[0].value).toISOString();
    if (event[1].value != null)
      this.filter['createdAt__lt'] = new Date(event[1].value).toISOString();
    this.offset = 0
    this.count = 0
    this.getData()
  }

  fields = [
    { "key": "total", "label": "GLOBAL.TOTAL", "type": "price" },
    { "key": "status", "label": "GLOBAL.STATUS", "type": "status" },
    { "key": "user.first_name", "label": "GLOBAL.OWNER", "type": "object" },
    { "key": "createdAt", "label": "GLOBAL.CREATED_AT", "type": "date", "viewDate": true },
    {
      "type": "buttons", "label": "", "buttons": [
        { "action": "changeState", "label": "GLOBAL.CHANGESTATE" },
        { "action": "show", "label": "GLOBAL.SHOW" }
      ]
    }
  ]
  constructor(private orderSer: OrderService, private mainSer: MainService, private dialogSer: DialogService) { }

  ngOnInit() {
    if (this.roleType == 'operator') {
      this.filter["center__in"] = this.mainSer.authServ.getCenterId()
      this.statusFilter = [{ "label": "all", "value": null, "type": "default" },
      { "label": "delivered", "value": "delivered", "type": "success" },
      { "label": "delivering", "value": "delivering", "type": "success" },
      { "label": "packed", "value": "packed", "type": "danger" },
      { "label": "assigned", "value": "assigned", "type": "warning" },
      { "label": "canceled", "value": "canceled", "type": "inverse" },
      ]
    } else {
      this.statusFilter = [{ "label": "all", "value": null, "type": "default" },
      { "label": "delivered", "value": "delivered", "type": "success" },
      { "label": "delivering", "value": "delivering", "type": "success" },
      { "label": "packed", "value": "packed", "type": "danger" },
      { "label": "assigned", "value": "assigned", "type": "warning" },
      { "label": "pending", "value": "pending", "type": "dark-warning" },
      { "label": "canceled", "value": "canceled", "type": "inverse" },
      ]
    }
    this.getData()
  }


  changePages(page) {
    console.log(page);
    this.offset = (page - 1) * this.limit;
    this.getData()
  }
  getData() {
    var self = this;
    self.arrayOrder = [];

    self.orderSer.getPaginationObject(self.limit, self.offset, self.filter, function (err: appError, data, count) {
      if (err)
        return err.returnMessage()
      self.arrayOrder = data;
      self.count = count;
    })
  }

  action(data) {
    let self = this;
    if (data.event == 'changeState') {
      this.dialogSer.changeOrderStatus(this.arrayOrder[data.index], function (params) {
        self.getData();
      })

      // this.mainSer.globalServ.goTo("edit-abstract-product/" + data.id)
    }
    else if (data.event == 'show') {
      this.dialogSer.viewOrder(this.arrayOrder[data.index], function (params) {
        self.dialogSer.changeOrderStatus(self.arrayOrder[data.index], function (params) {
          self.getData();
        })
      })
    }
  }


}
