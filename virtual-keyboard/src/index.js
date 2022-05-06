import './style.sass';

const hello = () => console.log('hello world');
hello();

class User {
  constructor(name, age = 20) {
    this.name = name;
    this.age = age;
  }
}

const newUser = new User('vasia');

console.dir(newUser);
console.log(User);
