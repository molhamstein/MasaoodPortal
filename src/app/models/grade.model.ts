export class Grade {
  id: number;
  nameEn: string;
  nameAr: string;

  constructor(grade) {
    this.id = grade.id || null;
    this.nameEn = grade.nameEn || "";
    this.nameAr = grade.nameAr || "";
  }

  static arrayConstructor(data: any[]): Grade[] {
    var gradeObject: Grade[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        gradeObject.push(new Grade(element));
        if (index + 1 == data.length)
          return gradeObject
      }
    else {
      return gradeObject
    }
  }


}

