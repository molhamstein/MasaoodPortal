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

  constructor(public activeModal: NgbActiveModal, private orderSer: OrderService, private centerSer: CenterService, private mainSer: MainService) {
  }

  public center: Center[] = [];
  public status: string;
  public centerId: string;
  public statusList = [
    { "label": "unassigned", "value": "unassigned" },
    { "label": "pending", "value": "pending" },
    { "label": "packed", "value": "packed" },
    { "label": "indelivery", "value": "indelivery" },
    { "label": "delivered", "value": "delivered" }
  ]

  changeStatus(value) {
    this.status = value
  }

  changeCenter(value) {
    this.centerId = value
  }
  ngOnInit() {
    let self = this;
    this.status = this.order.status
    console.log(this.order)
    this.centerSer.getAllObject(function (err: appError, data) {
      self.center = data;
    })
  }
  // change() {
  //   if(this.status=="")
  // }
  close() {
    this.activeModal.close()
  }
}
