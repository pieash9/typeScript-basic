class User {
  // properties, method, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    (this.userName = userName), (this.age = age);
  }
  display(): void {
    console.log(`userName: ${this.userName}, age: ${this.age}`);
  }
}
const user1 = new User("pieash",12)
user1.display()

//  class object

// user1 - name: pieash, age:32
// user2 - name: khan, age:16


const user2 = new User("Khan",2)
user2.display()