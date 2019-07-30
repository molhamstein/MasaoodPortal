export class Center {
  id: number;
  nameEn: string;
  nameAr: string;
  statesCount: number;
  lat: number
  lng: number
  statesId: number[]
  states: any[];
  status: string;
  createdAt: Date;

  constructor(center) {
    this.id = center.id || null;
    this.nameEn = center.nameEn || "";
    this.nameAr = center.nameAr || "";
    this.status = center.status || "";
    this.lat = center.lat || 0;
    this.lng = center.lng || 0;
    this.states = center.states || [];
    this.createdAt = center.createdAt || new Date()

    if (center.states) {
      this.statesCount = center.states.length
      this.statesId = []
      center.states.forEach(element => {
        this.statesId.push(element.id.toString())
      });
    }
    else {
      this.statesCount = 0
      this.statesId = []
    }

  }

  static arrayConstructor(data: any[]): Center[] {
    var centerObject: Center[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        centerObject.push(new Center(element));
        if (index + 1 == data.length)
          return centerObject
      }
    else {
      return centerObject
    }
  }

}

