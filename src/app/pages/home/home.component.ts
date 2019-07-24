import { Car } from './../../models/car.model';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    w = [{ "file": "", "id": "", "status": "", "thumbnail": "", "filee": "" }, { "file": "", "id": "", "status": "", "thumbnail": "", "fileee": "" }]
    x: Car = new Car(this.w)
    data = [{ "name": "anas", "age": 24, "work": "dev" }, { "name": "molham", "age": 27, "work": "mang" }, { "name": "rami", "age": 23, "work": "dev" }]
    fields = ["name", "work"]
    test(tes){
        alert("SSSSS");
    }

    imageUrl="https://cdn.soccerladuma.co.za/cms2/image_manager/uploads/News/654877/7/default.jpg"

    imageUrlChangeCallback(event){
        this.imageUrl=event;
    }
}
