export class Car {
  id: string;
  file: string;
  status: string;
  thumbnail: string;


  constructor(car) {
    this.id = car.id;
    this.file = car.file || "";
    this.status = car.status || "";
    this.thumbnail = car.thumbnail || "";   
  }



}

