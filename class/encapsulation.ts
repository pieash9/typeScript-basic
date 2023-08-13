class User {
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    (this.userName = userName), (this.age = age);
  }
  display(): void {
    console.log(
        `userName: ${this.userName}, age: ${this.age}`
      );
  }
}

class Student extends User {
private  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `Student name: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
  setStudentId(studentId:number){
    this.studentId=studentId
  }
  getStudentID():number{
    return this.studentId
  }
}

const student1 = new Student("pieash", 45, 101);
student1.setStudentId(102)
// student1.display();
console.log(student1.getStudentID())

let user1 = new User("khan",34)
user1.userName="sumi"

// user1.display()