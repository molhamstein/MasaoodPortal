import { CenterService } from './../../centers/center.service';
import { Center } from './../../../models/center.model';
import { appError } from './../../../models/app-error.model';
import { DialogService } from './../../../service/dialog.service';
import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './../../../service/main.service';
import { Groupe } from './../../../models/group.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // validatyion variable
  public isSubmitted: boolean = false
  public message: string = "";

  public isUpdate: boolean = false;
  public id: number;
  public typeSelected;
  public tranferedata: any;


  userForm = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    groupId: new FormControl(null, Validators.required)
  });

  public languageKey = this.mainSer.globalServ.getLanguageKey()

  groups: Groupe[] = []
  centers: Center[] = []

  changeType(event) {
    console.log(event)
    this.typeSelected = this.groups.filter(x =>
      x.id == event
    )[0];
    console.log(this.typeSelected)
    if (this.typeSelected['name'] == 'admin') {
      this.userForm.addControl('email', new FormControl(null, Validators.required))
      this.userForm.addControl('password', new FormControl(null, Validators.required))
      this.userForm.removeControl('centerId')
      this.userForm.removeControl('mobile')
    }
    else if (this.typeSelected['name'] == 'user') {
      this.userForm.addControl('mobile', new FormControl(null, Validators.required))
      this.userForm.removeControl('password')
      this.userForm.removeControl('centerId')
      this.userForm.removeControl('email')
    }
    else if (this.typeSelected['name'] == 'operator') {
      this.userForm.addControl('email', new FormControl(null, Validators.required))
      this.userForm.addControl('password', new FormControl(null, Validators.required))
      this.userForm.addControl('centerId', new FormControl(null, Validators.required))
      this.userForm.removeControl('mobile')
    }
  }
  constructor(private mainSer: MainService, private groupSer: GroupService, private centerSer: CenterService, private routeSer: ActivatedRoute, private userSer: UserService, private dialogSer: DialogService) {
    var self = this;
    self.tranferedata = self.mainSer.transfereSer.getData()
    self.mainSer.transfereSer.clearData()
    this.routeSer.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true
        this.id = params['id']
        this.userSer.getOneObject(this.id, function (err: appError, data) {
          self.userForm.patchValue(data);
        });
      }
    });

  }
  ngOnInit() {
    var self = this;
    this.groupSer.getAllObject(function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.groups = data
    })

    this.centerSer.getAllObject(function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.centers = data
    })

  }

  createObject() {
    let self = this;
    let body = this.userForm.value;
    this.userSer.createUser(body, function (err: appError, data) {
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
    let body = this.userForm.value;
    this.userSer.updateAbstractProduct(body, self.id, function (err: appError, data) {
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
    if (this.userForm.valid == false) {
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
    if (this.tranferedata && this.tranferedata['isFromUser'])
      this.mainSer.globalServ.goTo("list-user")
    else
      this.mainSer.globalServ.goTo("list-staf-user")

  }
}
