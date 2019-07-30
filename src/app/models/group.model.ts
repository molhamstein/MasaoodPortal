export class Groupe {
  id: number;
  name: string;
  constructor(group) {
    this.id = group.id || null;
    this.name = group.name || "";
  }

  static arrayConstructor(data: any[]): Groupe[] {
    var groupeObject: Groupe[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        groupeObject.push(new Groupe(element));
        if (index + 1 == data.length)
          return groupeObject
      }
    else {
      return groupeObject
    }
  }


}

