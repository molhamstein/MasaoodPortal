import { Product } from './../../../models/product.model';
import { ProductService } from './../../products/product.service';
import { AbstractProduct } from './../../../models/abstract-product.model';
import { appError } from './../../../models/app-error.model';
import { AbstractProductService } from './../abstract-product.service';
import { MainService } from './../../../service/main.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-abstract-product',
  templateUrl: './show-abstract-product.component.html',
  styleUrls: ['./show-abstract-product.component.css']
})
export class ShowAbstractProductComponent implements OnInit {
  public id: number;

  public abstractProduct: AbstractProduct;
  arrayImageUrl: string[] = [];
  public languageKey = this.mainSer.globalServ.getLanguageKey()

  constructor(private mainSer: MainService, private routeSer: ActivatedRoute, private producteSer: ProductService, private abstrctProdSer: AbstractProductService) {
    var self = this;
    this.routeSer.params.subscribe(params => {
      console.log(params["id"])
      if (params['id']) {
        this.id = params['id']
        this.abstrctProdSer.getOneObject(this.id, function (err: appError, data) {
          console.log(data);
          self.arrayImageUrl = data.images
          self.abstractProduct = data;
        });
      }
    });
  }

  formatDate(date) {
    return this.mainSer.globalServ.formatDate(date, true)
  }

  back() {
    this.mainSer.globalServ.goTo("list-abstract-product")
  }

  ngOnInit() {
    this.getData()
  }



  // Products Table
  public limit: number = 10
  public offset: number = 0
  public count: number = 0
  public arrayProduct: Product[] = []

  fields = [
    { "key": "code", "label": "GLOBAL.CODE", "type": "string" },
    { "key": "price", "label": "GLOBAL.PRICE", "type": "price" },
    { "key": "status", "label": "GLOBAL.STATUS", "type": "status" },
    { "key": "abstractProduct." + this.languageKey['name'], "label": "GLOBAL.ABSTRACTPRODUCT", "type": "object" },
    { "key": "size." + this.languageKey['name'], "label": "GLOBAL.SIZE", "type": "object" },
    {
      "type": "buttons", "label": "", "buttons": [
        { "action": "edit", "label": "GLOBAL.EDIT" }]
    }
  ]

  addProduct() {
    this.mainSer.globalServ.goTo("add-product/" + this.id)
  }

  changePages(page) {
    console.log(page);
    this.offset = (page - 1) * this.limit;
    this.getData()
  }
  getData() {
    var self = this;
    self.producteSer.getPaginationObjectByAbstract(self.limit, self.offset, self.id, function (err: appError, data, count) {
      if (err)
        return err.returnMessage()
      self.arrayProduct = data;
      self.count = count;
    })
  }

  action(data) {
    if (data.event == 'edit') {
      this.mainSer.globalServ.goTo("edit-product/" + this.id + "/" + data.id)
    }
  }


}
