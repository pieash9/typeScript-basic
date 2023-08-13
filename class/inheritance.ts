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

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number , studentId:number) {
    super(userName,age)
    this.studentId = studentId
  }
  display(): void {
    console.log(`userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
  }
}

const student1 = new Student("pieash", 45, 101);
student1.display()

//   const user1 = new User("pieash",12)
//   user1.display()
//   const user2 = new User("Khan",2)
//   user2.display()
