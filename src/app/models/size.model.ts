export class Size {
  id: number;
  nameEn: string;
  nameAr: string;
  code:string
  constructor(code) {
    this.id = code.id || null;
    this.nameEn = code.nameEn || "";
    this.nameAr = code.nameAr || "";
    this.code = code.code || "";
  }

  static arrayConstructor(data: any[]): Size[] {
    var sizeObject: Size[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        sizeObject.push(new Size(element));
        if (index + 1 == data.length)
          return sizeObject
      }
    else {
      return sizeObject
    }
  }


}

