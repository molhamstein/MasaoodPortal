import { DialogService } from './../../../service/dialog.service';
import { SizeService } from './../size.service';
import { appError } from './../../../models/app-error.model';
import { ProductService } from './../product.service';
import { Size } from './../../../models/size.model';
import { MainService } from './../../../service/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // validatyion variable
  public isSubmitted: boolean = false
  public message: string = "";

  public isUpdate: boolean = false;
  public id: number;
  public abstractProductId: number;

  productForm = new FormGroup({
    code: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    sizeId: new FormControl("", Validators.required),
    abstractProductId: new FormControl("", Validators.required),
  });

  // constArray
  public statusList = [{ "label": "available", "value": "available" }, { "label": "unavailable", "value": "unavailable" }]
  public languageKey = this.mainSer.globalServ.getLanguageKey()

  sizes: Size[] = []


  constructor(private mainSer: MainService, private sizeSer: SizeService, private routeSer: ActivatedRoute, private producteSer: ProductService, private dialogSer: DialogService) {
    var self = this;
    this.routeSer.params.subscribe(params => {
      self.abstractProductId = params['abstractProductId']
      if (params['id']) {
        this.isUpdate = true
        this.id = params['id']
        this.producteSer.getOneObject(this.id, function (err: appError, data) {
          self.productForm.patchValue(data);
        });
      } else {
        self.productForm.patchValue({ "abstractProductId": self.abstractProductId });
      }
    });

  }


  ngOnInit() {
    var self = this;
    this.sizeSer.getAllSize(function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.sizes = data
    })

  }

  createObject() {
    let self = this;
    let body = this.productForm.value;
    this.producteSer.createAbstractProduct(body, function (err: appError, data) {
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
    let body = this.productForm.value;
    this.producteSer.updateAbstractProduct(body, self.id, function (err: appError, data) {
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
    if (this.productForm.valid == false) {
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
    this.mainSer.globalServ.goTo("show-abstract-product/" + this.abstractProductId)
  }


}
