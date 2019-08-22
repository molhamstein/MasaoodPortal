import { Grade } from './grade.model';
import { Image } from './image.model';
export class AbstractProduct {
  id: number;
  order: number;
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
  rangePrice: string;
  status: string;
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
    this.rangePrice = this.calcRangeProduct(grade)
    this.status = grade.status || 'available';
    this.order = grade.order || 0;
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

  calcRangeProduct(abstractProd) {
    var minPrice = Number.MAX_SAFE_INTEGER;
    var maxPrice = Number.MIN_SAFE_INTEGER;
    if (abstractProd.products == null || abstractProd.products.length == 0)
      return ""
    abstractProd.products.forEach(element => {
      if (element.price < minPrice)
        minPrice = Math.round(element.price * 10) / 10;
      if (element.price > maxPrice)
        maxPrice = Math.round(element.price * 10) / 10;
    });
    return minPrice + " ~ " + maxPrice
  }

}

