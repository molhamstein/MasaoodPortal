export class State {
  id: number;
  nameEn: string;
  nameAr: string;


  constructor(state) {
    this.id = state.id || null;
    this.nameEn = state.nameEn || "";
    this.nameAr = state.nameAr || "";
  }

  static arrayConstructor(data: any[]): State[] {
    var stateObject: State[] = []
    if (data.length > 0)
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        stateObject.push(new State(element));
        if (index + 1 == data.length)
          return stateObject
      }
    else {
      return stateObject
    }
  }

}

