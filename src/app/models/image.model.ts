export class Image {
  id: number;
  type: string;
  file: string;


  constructor(image) {
    this.id = image.id || null;
    this.type = image.type || "";
    this.file = image.file || "";
  }

  static arrayconstructor(data: any[]): Image[] {
    var imageObject: Image[] = []
    if (data && data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        imageObject.push(new Image(element));
        if (index + 1 == data.length)
          return imageObject
      }
    else {
      return imageObject
    }
  }


}

