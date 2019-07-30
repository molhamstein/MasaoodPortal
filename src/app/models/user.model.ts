export class User {
  id: number;
  password: string;
  first_name: string;
  last_name: string
  email: string
  mobile: string;
  verified: boolean
  groupsId: number;

  constructor(user) {
    this.id = user.id || null;
    this.password = user.password || "";
    this.mobile = user.mobile || "";
    this.first_name = user.first_name || "";
    this.last_name = user.last_name || "";
    this.email = user.email || "";
    this.verified = user.verified || false;
    this.groupsId = this.groupsId[0] || null
    // // if (user.groups) {
    // //   user.groups.forEach(element => {
    // //     this.groupsId.push(element.id)
    // //   });
    // }
  }

  // static arrayConstructor(data: any[]): Size[] {
  //   var sizeObject: Size[] = []
  //   if (data.length > 0)
  //     for (let index = 0; index < data.length; index++) {
  //       const element = data[index];
  //       sizeObject.push(new Size(element));
  //       if (index + 1 == data.length)
  //         return sizeObject
  //     }
  //   else {
  //     return sizeObject
  //   }
  // }


}

