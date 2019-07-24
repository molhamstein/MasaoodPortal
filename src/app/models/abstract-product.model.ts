import { Grade } from './grade.model';
import { Image } from './image.model';
export class AbstractProduct {
  id: number;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  gender: string;
  gradeId: number;
  imagesId: number[];
  grade: Grade
  images: Image[];
  createdAt: Date;

  constructor(grade) {
    this.id = grade.id || null;
    this.nameEn = grade.nameEn || "";
    this.nameAr = grade.nameAr || "";
    this.descriptionEn = grade.descriptionEn || "";
    this.descriptionAr = grade.descriptionAr || "";
    this.gender = grade.gender || "";
    this.grade = new Grade(grade.grade) || null
    this.gradeId = grade.gradeId || this.grade.id || null;
    this.images = Image.arrayconstructor(grade.images) || []
    this.imagesId = grade.imagesId || []
    this.createdAt = grade.createdAt || new Date()

  }

  static arrayConstructor(data: any[]): AbstractProduct[] {
    var gradeObject: AbstractProduct[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        gradeObject.push(new AbstractProduct(element));
        if (index + 1 == data.length)
          return gradeObject
      }
    else {
      return gradeObject
    }
  }


}

