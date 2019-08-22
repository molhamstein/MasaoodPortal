import { DialogService } from './../../../service/dialog.service';
import { AbstractProductService } from './../abstract-product.service';
import { MainService } from './../../../service/main.service';
import { GradeService } from './../grade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Grade } from '../../../models/grade.model';
import { appError } from '../../../models/app-error.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-abtract-products',
  templateUrl: './add-abtract-products.component.html',
  styleUrls: ['./add-abtract-products.component.css']
})
export class AddAbtractProductsComponent implements OnInit {
  // validatyion variable
  public isSubmitted: boolean = false
  public message: string = "";

  public isUpdate: boolean = false;
  public id: number;


  public arrayImageUrl: string[] = [];
  abtractProductForm = new FormGroup({
    nameEn: new FormControl("", Validators.required),
    nameAr: new FormControl("", Validators.required),
    descriptionEn: new FormControl("", Validators.required),
    descriptionAr: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    gradeId: new FormControl("", Validators.required)
  });


  // constArray
  public genders = [{ "label": "male", "value": "male" }, { "label": "female", "value": "female" }]
  public languageKey = this.mainSer.globalServ.getLanguageKey()
  public statusList = [{ "label": "available", "value": "available" }, { "label": "unavailable", "value": "unavailable" }]

  grades: Grade[] = []



  constructor(public gradeSer: GradeService, private routeSer: ActivatedRoute, private dialogSer: DialogService, public abstrctProdSer: AbstractProductService, public mainSer: MainService) {
    var self = this;
    this.routeSer.params.subscribe(params => {
      console.log(params["id"])
      if (params['id']) {
        this.isUpdate = true
        this.id = params['id']
        this.abstrctProdSer.getOneObject(this.id, function (err: appError, data) {
          console.log(data);
          self.arrayImageUrl = data.images
          self.abtractProductForm.patchValue(data);
        });
      }
    });

  }

  ngOnInit() {
    var self = this;
    this.gradeSer.getAllGrade(function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.grades = data
    })
  }

  createObject() {
    let self = this;
    let body = this.abtractProductForm.value;
    this.abstrctProdSer.createAbstractProduct(body, self.arrayImageUrl, function (err: appError, data) {
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
    let body = this.abtractProductForm.value;
    this.abstrctProdSer.updateAbstractProduct(body, self.arrayImageUrl, self.id, function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.dialogSer.successMessage(true, function () {
        self.back()
      })
    })
  }

  imageUrlChangeCallback(data) {
    this.arrayImageUrl = data;
    this.isSubmitted = false;
  }
  onFormSubmit() {
    var self = this;
    if (this.abtractProductForm.valid == false || this.arrayImageUrl.length == 0) {
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
    this.mainSer.globalServ.goTo("list-abstract-product")
  }


}
