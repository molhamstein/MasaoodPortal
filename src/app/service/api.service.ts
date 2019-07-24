import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appError } from '../models/app-error.model';
// import { Ng2ImgMaxService } from 'ng2-img-max';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient, private authSer: AuthService) {
  }
  readonly baseUrl = "http://104.217.253.15:3434/api/v1/"
  constURL = {
    "login": "password-auth/login/",
    "uploadImg": "medias/",
    "grade": "grades/",
    "size": "sizes/",
    "states": "states/",
    "abstractProducts": "abstract-products/",
    "oneAbstractProducts": "abstract-products/{{id}}/",
    "products": "products/",
    "oneProducts": "products/{{id}}/",
    "oneCenters": "centers/{{id}}/",
    "orders": "orders/",
    "users": "users/",
    "centers": "centers/",
    "cancelOrders":"orders/{{id}}/assign/"
  }




  private createUrlString(index, variables, filter, ordering) {
    let url = this.constURL[index];
    for (var key in variables) {
      console.log("{{" + key + "}}")
      url = url.replace(new RegExp("{{" + key + "}}", "g"), variables[key]);
      console.log(url);
    };
    if (filter != null || ordering != null)
      url += "?";

    if (filter != null) {
      for (var key in filter) {
        url += key + "=" + filter[key] + "&"
      };
    }
    if (ordering != null) {
      url += "ordering=" + ordering
    }
    return this.baseUrl + url;
  }

  private handleError(error: Response | any) {
    return Observable.throw(new appError(error))
  }






  login(urlObject, data) {
    let url = this.createUrlString(urlObject.index, urlObject.variables, urlObject.filter, urlObject.ordering)
    let _options = { headers: new HttpHeaders({ 'responseType': 'text', 'Content-Type': 'application/json', 'Accept': 'application/json' }) };

    return this.http.post(url, data, _options).map((Response: Response) => {
      return Response;
    }).catch(this.handleError);
  }





  get(urlObject, token: string = "") {
    let auth = "";
    if (token != "")
      auth = token
    else if (this.authSer.isLogin()) {
      auth = this.authSer.getToken();
    }
    let url = this.createUrlString(urlObject.index, urlObject.variables, urlObject.filter, urlObject.ordering)

    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.get(url, _options)
      .catch(this.handleError)
  }




  uploadImage(urlObject, data, length, token: string = ""): Observable<Response> {
    let url = this.createUrlString(urlObject.index, urlObject.variables, urlObject.filter, urlObject.ordering)
    let fd = new FormData();
    var mainthis = this;
    console.log(url)
    // return new Observable(function () {
    // mainthis.ng2ImgMax.compress(data, 0.5, true, true).subscribe((result) => {
    // console.log(data);
    for (var index = 0; index < length; index++) {
      fd.append("file", data[index], data[index].name)
    }
    let auth = "";
    if (token != "")
      auth = token
    else if (mainthis.authSer.getToken() != null) {
      auth = mainthis.authSer.getToken();
    }
    let _options = { headers: new HttpHeaders({ "Authorization": auth }) };
    console.log("auth")
    console.log(auth)
    console.log("getToken")
    console.log(mainthis.authSer.getToken())
    return mainthis.http.post(url, fd, _options).timeout(90000).map((Response: Response) => {
      return (Response);
    }).catch((mainthis.handleError));
    // })
    //   });
  }


  post(urlObject, data, token: string = "") {
    let auth = "";
    if (token != "")
      auth = token
    else if (this.authSer.isLogin()) {
      auth = this.authSer.getToken();
    }
    let url = this.createUrlString(urlObject.index, urlObject.variables, urlObject.filter, urlObject.ordering)

    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.post(url, data, _options)
      .catch(this.handleError)
  }

  put(urlObject, data, token: string = "") {
    let auth = "";
    if (token != "")
      auth = token
    else if (this.authSer.isLogin()) {
      auth = this.authSer.getToken();
    }
    let url = this.createUrlString(urlObject.index, urlObject.variables, urlObject.filter, urlObject.ordering)

    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": auth }) };

    return this.http.put(url, data, _options)
      .catch(this.handleError)
  }
}