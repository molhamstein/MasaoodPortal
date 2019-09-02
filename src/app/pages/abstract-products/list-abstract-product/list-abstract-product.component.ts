import { MainService } from './../../../service/main.service';
import { appError } from './../../../models/app-error.model';
import { AbstractProductService } from './../abstract-product.service';
import { AbstractProduct } from './../../../models/abstract-product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-abstract-product',
  templateUrl: './list-abstract-product.component.html',
  styleUrls: ['./list-abstract-product.component.css']
})
export class ListAbstractProductComponent implements OnInit {

  public limit: number = 10
  public offset: number = 0
  public count: number = 0
  arrayAbstractProduct: AbstractProduct[] = []
  public languageKey = this.mainSer.globalServ.getLanguageKey()

  fields = [
    { "key": "images[0].file", "label": "", "type": "image" },
    { "key": "nameAr", "label": "GLOBAL.NAME_AR", "type": "string" },
    { "key": "nameEn", "label": "GLOBAL.NAME_EN", "type": "string" },
    { "key": "order", "label": "GLOBAL.ORDER", "type": "string" },
    { "key": "rangePrice", "label": "GLOBAL.PRICE", "type": "price" },
    { "key": "gender", "label": "GLOBAL.GENDER", "type": "gender" },
    { "key": "status", "label": "GLOBAL.STATUS", "type": "status" },
    { "key": "grade." + this.languageKey['name'], "label": "GLOBAL.GRADE", "type": "object" },
    { "key": "createdAt", "label": "GLOBAL.CREATED_AT", "type": "date" },
    {
      "type": "buttons", "label": "", "isIcon": false, "buttons": [
        { "type": "success", "action": "edit", "label": "GLOBAL.EDIT" },
        { "type": "primary", "action": "show", "label": "GLOBAL.SHOW" }]
    }
  ]
  constructor(private abstrctProdSer: AbstractProductService, private mainSer: MainService) { }

  ngOnInit() {
    this.getData()
  }

  addProduct() {
    this.mainSer.globalServ.goTo("add-abstract-product/")
  }


  changePages(page) {
    console.log(page);
    this.offset = (page - 1) * this.limit;
    this.getData()
  }
  getData() {
    var self = this;
    self.abstrctProdSer.getPaginationObject(self.limit, self.offset, function (err: appError, data, count) {
      if (err)
        return err.returnMessage()
      self.arrayAbstractProduct = data;
      self.count = count;
    })
  }

  action(data) {
    if (data.event == 'edit') {
      this.mainSer.globalServ.goTo("edit-abstract-product/" + data.id)
    }
    else if (data.event == 'show') {
      this.mainSer.globalServ.goTo("show-abstract-product/" + data.id)
    }
  }
  goToOrder() {
    this.mainSer.globalServ.goTo("order-abstract-product")
  }
}
