// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty,
        this.favLanguage = instructorAttributes.favLanguage,
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    adjustGrade(student){
        student.grade = student.grade + Math.floor(100 * Math.random());
        console.log(`${student.name}'s grade has been adjusted to ${student.grade}`);
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects,
        this.grade = Math.floor(100 * Math.random());
    }
    listsSubjects(){
        this.favSubjects.forEach(function(element) { console.log(element) });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR on ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint chellenge on ${subject}`);
    }
    graduate(){
        if (this.grade >= 70) {
            console.log(`${this.name} is ready to graduate!`);
        } else console.log(`${this.name} still has some learning to do!`)
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes){
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName,
        this.favInstructor = projectManagerAttributes.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const jim = new Student({
    name: 'Jim',
    location: 'Bedrock',
    age: 37,
    className: "WEB24",
    favSubjects: ["HTML", "CSS", "JavaScript"]
  });

  const greg = new ProjectManager({
    name: 'Greg',
    location: 'Bedrock',
    age: 37,
    gradClassName: 'CS1',
    favInstructor: fred
  });





  jim.listsSubjects();
  jim.PRAssignment("JavaScript-IV");
  jim.sprintChallenge("Advanced-CSS");
  fred.demo("Applied JavaScript");
  fred.grade(jim, "CSS-FlexBox");
  greg.standUp('WEB24-Lecture');
  greg.debugsCode(jim, 'node.JS');
  console.log(`${jim.name}'s grade is ${jim.grade}`);
  jim.graduate();
  fred.adjustGrade(jim);
  jim.graduate();

