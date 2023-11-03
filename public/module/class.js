export class User {
  constructor(userInput){
    this.type = "user";
    this.message = userInput
    this.timestamp = `${new Date().getHours()}시 ${new Date().getMinutes()}분`
  }
}

// const exam = new User('안녕하십니까');
// console.log(exam);