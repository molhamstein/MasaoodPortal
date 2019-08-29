import { CenterProductService } from './../../centerProduct/center-product.service';
import { CenterProduct } from './../../../models/center-product.model';
import { appError } from './../../../models/app-error.model';
import { MainService } from './../../../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { CenterService } from './../center.service';
import { Center } from './../../../models/center.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-center',
  templateUrl: './show-center.component.html',
  styleUrls: ['./show-center.component.css']
})
export class ShowCenterComponent implements OnInit {

  public id: number;

  public center: Center;
  public languageKey = this.mainSer.globalServ.getLanguageKey()


  constructor(private mainSer: MainService, private routeSer: ActivatedRoute, private centerSer: CenterService, private centerProductSer: CenterProductService) {
    var self = this;
    this.routeSer.params.subscribe(params => {
      console.log(params["id"])
      if (params['id']) {
        this.id = params['id']
        this.centerSer.getOneObject(this.id, function (err: appError, data) {
          console.log(data);
          self.center = data;
        });
      }
    });

  }


  formatDate(date) {
    return this.mainSer.globalServ.formatDate(date, true)
  }


  back() {
    this.mainSer.globalServ.goTo("list-center")
  }

  ngOnInit() {
    this.getData()
  }

  // Center Products Table
  public limit: number = 10
  public offset: number = 0
  public count: number = 0
  public arrayCenterProduct: CenterProduct[] = []

  fields = [
    { "key": "product.abstractProduct." + this.languageKey['name'], "label": "GLOBAL.ABSTRACTPRODUCT", "type": "object" },
    { "key": "product.abstractProduct.gender", "label": "GLOBAL.GENDER", "type": "object" },
    { "key": "product.abstractProduct.grade." + this.languageKey['name'], "label": "GLOBAL.GRADE", "type": "object" },
    { "key": "product.price", "label": "GLOBAL.PRICE", "type": "object" },
    { "key": "product.size." + this.languageKey['name'], "label": "GLOBAL.SIZE", "type": "object" },
    { "key": "count", "label": "GLOBAL.COUNT", "type": "price" },
    { "key": "createdAt", "label": "GLOBAL.CREATED_AT", "type": "date" },
    {
      "type": "buttons", "label": "", "buttons": [
        { "type": "success", "action": "edit", "label": "GLOBAL.EDIT" }]
    }
  ]

  addCenterProduct() {
    this.mainSer.globalServ.goTo("add-center-product/" + this.id)
  }

  changePages(page) {
    console.log(page);
    this.offset = (page - 1) * this.limit;
    this.getData()
  }
  getData() {
    var self = this;
    self.centerProductSer.getPaginationObjectByCenter(self.limit, self.offset, self.id, function (err: appError, data, count) {
      if (err)
        return err.returnMessage()
      self.arrayCenterProduct = data;
      self.count = count;
    })
  }

  action(data) {
    if (data.event == 'edit') {
      this.mainSer.globalServ.goTo("edit-center-product/" + this.id + "/" + data.id)
    }
  }


}
