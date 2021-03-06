import { DialogService } from './../../../service/dialog.service';
import { appError } from './../../../models/app-error.model';
import { MainService } from './../../../service/main.service';
import { OrderService } from './../order.service';
import { Order } from './../../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { SelectDropdownComponent } from 'ng-select/select-dropdown.component';
import { saveAs } from "file-saver";

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
  public filter = { "status__in": null, "createdAt__gt": null, "createdAt__lt": null, "center__in": null, "archived": false, "user__mobile__icontains": null, "invoice__icontains": null, "deleted": false }
  public statusFilter = []

  public dateFilter = [
    { "label": "FROM", "type": "from", "value": null },
    { "label": "TO", "type": "to", "value": null },
  ]

  clearFilter() {
    this.filter = { "status__in": null, "createdAt__gt": null, "createdAt__lt": null, "center__in": null, "user__mobile__icontains": null, "invoice__icontains": null, "archived": false, "deleted": false }
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


  changeValueParent(event) {
    this.offset = 0
    this.count = 0
    if (event[0] == 0 && event[0] == 0) {
      event = "+" + event.slice(2)
    }
    this.filter.user__mobile__icontains = event;
    this.getData()
  }
  changeInvoiceParent(event) {
    this.offset = 0
    this.count = 0
    this.filter.invoice__icontains = event
    this.getData()
  }
  fields = [
    { "key": "total", "label": "GLOBAL.TOTAL", "type": "price" },
    { "key": "status", "label": "GLOBAL.STATUS", "type": "status" },
    { "key": "user.first_name", "label": "GLOBAL.OWNER", "type": "object" },
    { "key": "user.mobile", "label": "GLOBAL.MOBILE", "type": "object" },
    {
      "key": "isDelivery", "label": "GLOBAL.DELIVERYTYPE", "type": "multiValue", "isMultiLevel": false, "state": [
        { "value": true, "label": "GLOBAL.DELIVERYS.DELIVERY", "type": "primary" },
        { "value": false, "label": "GLOBAL.DELIVERYS.PICKUP", "type": "info" }
      ]
    },
    { "key": "invoice", "label": "GLOBAL.INVOICE", "type": "string" },
    { "key": "createdAt", "label": "GLOBAL.CREATED_AT", "type": "date", "viewDate": true },
    {
      "type": "buttons", "label": "", "isIcon": true, "buttons": [
        { "icon": "icofont-exchange", "type": "success", "action": "changeState", "label": "GLOBAL.CHANGESTATE" },
        { "icon": "icofont-eye-alt", "type": "primary", "action": "show", "label": "GLOBAL.SHOW" },
        { "icon": "icofont-archive", "type": "warning", "action": "archive", "label": "GLOBAL.ARCHIVE" },
        { "icon": "icofont-print", "type": "info", "action": "print", "label": "GLOBAL.PRINT" },
        { "icon": "icofont-ui-delete", "type": "danger", "action": "delete", "label": "GLOBAL.DELETE", "condition": [{ "key": "status", "value": "delivered", "operator": "!=" }] }
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
    else if (data.event == 'archive') {
      this.dialogSer.confirmMessage("archive", function () {
        self.orderSer.archiveOrder(self.arrayOrder[data.index].id, function (err: appError, data) {
          self.getData()
        })
      })
    }
    else if (data.event == 'delete') {
      this.dialogSer.confirmMessage("delete", function () {
        self.orderSer.deleteOrder(self.arrayOrder[data.index].id, function (err: appError, data) {
          self.getData()
        })
      })
    }
    else if (data.event == 'print') {
      var orderId = self.arrayOrder[data.index].id;
      window.open("http://174.138.28.26:3434/api/v1/orders/" + orderId + "/print/")
    }


  }


}
