import { MainService } from './../../../service/main.service';
import { DialogService } from './../../../service/dialog.service';
import { appError } from './../../../models/app-error.model';
import { AbstractProduct } from './../../../models/abstract-product.model';
import { AbstractProductService } from './../abstract-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-product-order',
  templateUrl: './abstract-product-order.component.html',
  styleUrls: ['./abstract-product-order.component.css']
})
export class AbstractProductOrderComponent implements OnInit {

  constructor(private abstrctProdSer: AbstractProductService, private dialogSer: DialogService, private mainSer: MainService) { }

  ngOnInit() {
    this.getData()
  }
  arrayAbstractProduct: AbstractProduct[] = [];
  getData() {
    var self = this;
    self.arrayAbstractProduct = []
    self.abstrctProdSer.getAllObject(function (err: appError, data) {
      if (err)
        return err.returnMessage()
      self.arrayAbstractProduct = data;
    })
  }

  listSorted(event) {
    console.log(event)
    this.arrayAbstractProduct = event;
  }
  listStyle = {
    width: '100%', //width of the list defaults to 300,
    dropZoneHeight: '75px' // height of the dropzone indicator defaults to 50
  }

  save() {
    var self = this;
    self.dialogSer.confirmMessage("CHANGEORDER", function () {
      var arrayOfOrder = []
      for (let index = 0; index < self.arrayAbstractProduct.length; index++) {
        const element = self.arrayAbstractProduct[index];
        arrayOfOrder.push({ "id": element.id, "order": index + 1 })
        if (arrayOfOrder.length == self.arrayAbstractProduct.length) {
          self.abstrctProdSer.changeOrder(arrayOfOrder, function () {
            self.back()
          })
        }
      }
    })
  }

  back() {
    this.mainSer.globalServ.goTo("list-abstract-product")
  }
}
