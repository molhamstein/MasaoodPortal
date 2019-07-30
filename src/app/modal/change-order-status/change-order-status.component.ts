import { CenterService } from './../../pages/centers/center.service';
import { OrderService } from './../../pages/order/order.service';
import { Order } from './../../models/order.model';
import { appError } from './../../models/app-error.model';
import { Center } from './../../models/center.model';
import { MainService } from '../../service/main.service';
import { Component, Input, OnInit } from '@angular/core';




import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-change-order-status',
  templateUrl: './change-order-status.component.html',
  styleUrls: ['./change-order-status.component.css']
})
export class ChangeOrderStatusComponent implements OnInit {
  @Input() order: Order;

  public languageKey = this.mainSer.globalServ.getLanguageKey()
  public message: string = "";
  constructor(public activeModal: NgbActiveModal, private orderSer: OrderService, private centerSer: CenterService, private mainSer: MainService) {
  }

  public center: Center[] = [];
  public status: string;
  public centerId: number;
  public statusList = []
  public roleType = this.mainSer.authServ.getRole()

  change() {
    var self = this;
    if (this.status == 'assigned' && this.centerId == null) {
      return this.message = "ERROR_FORM.CENTER_IS_REQUIRED"
    }

    var data = {}
    var type = ""
    if (this.status == "Canceled") {
      type = "cancelOrders"
    }
    else if (this.status == "assigned") {
      type = "assignOrders"
      data = { "center": this.centerId }
    }
    else if (this.status == "delivered") {
      type = "deliverOrders"
    }
    else if (this.status == "indelivery") {
      type = "deliveringOrders"
    }
    else if (this.status == "packed") {
      type = "packOrders"
    }



    this.orderSer.changeOrder(type, this.order.id, data, function (err, data) {
      self.activeModal.close(true)

    })

  }
  changeStatus(value) {
    this.message = "";
    this.status = value
  }

  changeCenter(value) {
    this.message = "";
    this.centerId = value
  }
  ngOnInit() {
    let self = this;
    this.status = this.order.status
    console.log(this.order)
    this.centerId = this.order.centerId;
    this.centerSer.getAllObject(function (err: appError, data) {
      self.center = data;
    })
    if (this.roleType == 'admin') {
      this.statusList = [
        { "label": "pending", "value": "pending" },
        { "label": "assigned", "value": "assigned" },
        { "label": "packed", "value": "packed" },
        { "label": "indelivery", "value": "indelivery" },
        { "label": "delivered", "value": "delivered" },
        { "label": "canceled", "value": "canceled" }
      ]
    } else {
      this.statusList = [
        { "label": "assigned", "value": "assigned" },
        { "label": "packed", "value": "packed" },
        { "label": "indelivery", "value": "indelivery" },
        { "label": "delivered", "value": "delivered" },
        { "label": "canceled", "value": "canceled" }
      ]
    }
  }
  // change() {
  //   if(this.status=="")
  // }
  close() {
    this.activeModal.close()
  }
}
