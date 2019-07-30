import { AbstractProductService } from './../../abstract-products/abstract-product.service';
import { IOption } from 'ng-select';
import { CenterProduct } from './../../../models/center-product.model';
import { appError } from './../../../models/app-error.model';
import { CenterProductService } from './../center-product.service';
import { DialogService } from './../../../service/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './../../../service/main.service';
import { Product } from './../../../models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractProduct } from '../../../models/abstract-product.model';

@Component({
  selector: 'app-add-center-product',
  templateUrl: './add-center-product.component.html',
  styleUrls: ['./add-center-product.component.css']
})
export class AddCenterProductComponent implements OnInit {
  // validatyion variable
  public isSubmitted: boolean = false
  public message: string = "";



  public isUpdate: boolean = false;
  public id: number;
  public centerId: number;

  centerProductObject: CenterProduct;
  centerProductForm = new FormGroup({
    productId: new FormControl("", Validators.required),
    count: new FormControl("", Validators.required),
    centerId: new FormControl("", Validators.required),
  });

  public languageKey = this.mainSer.globalServ.getLanguageKey()

  product: Product[] = []
  productOption: Array<IOption> = []

  constructor(private mainSer: MainService, private routeSer: ActivatedRoute, private centerProductSer: CenterProductService, private abstractSer: AbstractProductService, private dialogSer: DialogService) {

    var self = this;
    this.routeSer.params.subscribe(params => {
      self.centerId = params['centerId']
      self.centerProductForm.patchValue({ "centerId": self.centerId });
      if (params['id']) {
        this.isUpdate = true
        this.id = params['id']
        this.centerProductSer.getOneObject(this.id, function (err: appError, data) {
          self.centerProductForm.patchValue(data);
          self.centerProductObject = data
        });
      }
    });

  }

  getProduct(value) {
    let self = this
    this.productOption = []
    this.product = []
    this.abstractSer.getObjectByName(value, function (err: appError, data) {
      if (err)
        return
      data.forEach(element => {

        element.products.forEach(elementProd => {
          self.product.push(elementProd)
        });
        self.productOption = self.product.map(option => ({ value: option.id.toString(), label: option.abstractProduct[self.languageKey.name] + " " + option.size[self.languageKey.name] }));

      });
    })
  }


  ngOnInit() {
  }


  createObject() {
    let self = this;
    let body = this.centerProductForm.value;
    this.centerProductSer.createAbstractProduct(body, function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.dialogSer.successMessage(false, function () {
        self.back()
      })
    })
  }

  updateObject() {
    let self = this;
    let body = this.centerProductForm.value;
    this.centerProductSer.updateAbstractProduct(body, self.id, function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.dialogSer.successMessage(true, function () {
        self.back()
      })
    })
  }

  onFormSubmit() {
    var self = this;
    if (this.centerProductForm.valid == false) {
      this.isSubmitted = true;
      return
    }
    if (!self.isUpdate) {
      self.createObject();
    }
    else {
      self.updateObject()
    }
  }

  back() {
    this.mainSer.globalServ.goTo("show-center/" + this.centerId)
  }


}
