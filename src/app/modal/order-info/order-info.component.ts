import { MainService } from './../../service/main.service';
import { Component, Input, OnInit } from '@angular/core';




import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  @Input() order;

  public viewMap = false;
  public languageKey = this.mainSer.globalServ.getLanguageKey()

  constructor(public activeModal: NgbActiveModal, private mainSer: MainService) {
  }

  toggleViewMap() {
    this.viewMap = !this.viewMap
  }

  fields = [
    { "key": "count", "label": "GLOBAL.COUNT", "type": "price" },
    { "key": "product.code", "label": "GLOBAL.CODE", "type": "object" },
    { "key": "product.price", "label": "GLOBAL.PRICE", "type": "object" },
    { "key": "product.size." + this.languageKey['name'], "label": "GLOBAL.SIZE", "type": "object" },
    { "key": "product.abstractProduct." + this.languageKey['name'], "label": "GLOBAL.ABSTRACTPRODUCT", "type": "object" },

    // { "key": "createdAt", "label": "GLOBAL.CREATED_AT", "type": "date" },
  ]


  formatDate(date) {
    return this.mainSer.globalServ.formatDate(date)
  }
  ngOnInit() {
    console.log(this.order)
  }

  changeState() {
    this.activeModal.close(true)
  }
  close() {
    this.activeModal.close()
  }

  chnage() {

  }
}
