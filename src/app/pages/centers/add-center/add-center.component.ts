import { IOption } from 'ng-select';
import { StatesService } from './../state.service';
import { State } from './../../../models/state.model';
import { appError } from './../../../models/app-error.model';
import { DialogService } from './../../../service/dialog.service';
import { CenterService } from './../center.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './../../../service/main.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {

  // validatyion variable
  public isSubmitted: boolean = false
  public message: string = "";

  public isUpdate: boolean = false;
  public id: number;


  states: State[] = []
  statesOption: Array<IOption> = []



  marker = {
    lat: 33.5138,
    lng: 36.2765,
    draggable: true
  };
  lat: number = this.marker.lat;
  lng: number = this.marker.lng;
  mapClicked($event: MouseEvent) {
    this.marker.draggable = true;
    console.log($event);
    this.changeLocationGeo($event);
  }

  markerDragEnd($event: MouseEvent) {
    this.changeLocationGeo($event);
  }
  changeLocationGeo($event: MouseEvent) {
    this.marker.lat = $event['coords'].lat;
    this.marker.lng = $event['coords'].lng;
    this.centerForm.patchValue({ "lat": this.marker.lat })
    this.centerForm.patchValue({ "lng": this.marker.lng })
    this.lat = this.marker.lat;
    this.lng = this.marker.lng;

  }
  centerForm = new FormGroup({
    nameEn: new FormControl("", Validators.required),
    nameAr: new FormControl("", Validators.required),
    lng: new FormControl(this.marker.lng, Validators.required),
    lat: new FormControl(this.marker.lat, Validators.required),
    statesId: new FormControl([]),
  });

  // constArray
  public languageKey = this.mainSer.globalServ.getLanguageKey()


  constructor(private mainSer: MainService, private stateSer: StatesService, private routeSer: ActivatedRoute, private centerSer: CenterService, private dialogSer: DialogService) {
    var self = this;
    this.routeSer.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true
        this.id = params['id']
        this.centerSer.getOneObject(this.id, function (err: appError, data) {
          self.centerForm.patchValue(data);
          self.marker = {
            lat: data.lat,
            lng: data.lng,
            draggable: true
          };
          self.lat = self.marker.lat;
          self.lng = self.marker.lng;

        });
      }
    });

  }

  ngOnInit() {
    var self = this;
    this.stateSer.getAllObject(function (err: appError, data) {
      if (err) {
        err.returnMessage();
        return;
      }
      self.states = data
      self.statesOption = self.states.map(option => ({ value: option.id.toString(), label: option[self.languageKey.name] }));
      console.log(self.statesOption)
    })
  }

  createObject() {
    let self = this;
    let body = this.centerForm.value;
    this.centerSer.createCenter(body, function (err: appError, data) {
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
    let body = this.centerForm.value;
    this.centerSer.updateCenter(body, self.id, function (err: appError, data) {
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
    if (this.centerForm.valid == false) {
      alert("ssss")
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
    this.mainSer.globalServ.goTo("list-center")
  }

}

interface marker {
  lat: number;
  lng: number;
  draggable: boolean;
}