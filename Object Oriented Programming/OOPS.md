# OOPS in javascript

## Introduction
JavaScript is a prototype-based language that allows for object-oriented programming (OOP). OOP is a programming paradigm based on the concept of "objects," which are collections of properties and methods. It helps in organizing code and makes it more reusable, scalable, and maintainable.

> [!important]
> Javascript is a prototype-based language

## Object
- collection of properties and methods


## why use OOP 
- **Code Reusability**: Objects and classes can be reused across different parts of the application.
- **Scalability**: Easier to manage and scale large applications.
- **Maintainability**: Encapsulation makes the code easier to maintain.
- **Abstraction**: Hides complex implementation details and exposes only the necessary parts.

## parts of OOP
### Object literal
An object literal is the simplest way to create an object in JavaScript.

```javascript
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

person.greet(); // Output: Hello, John
```

### Constructor function
A constructor function is a special function used to create and initialize objects.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello, ' + this.name);
    };
}

const john = new Person('John', 30);
john.greet(); // Output: Hello, John
```
### prototypes
Prototypes allow you to add methods to constructors, which will be shared across all instances.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
};

const john = new Person('John', 30);
john.greet(); // Output: Hello, John
```
### classes 
Classes are a syntactic sugar over prototype-based inheritance, making the code easier to understand and use.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

const john = new Person('John', 30);
john.greet(); // Output: Hello, John
```
### Instances (new, this)
Instances are objects created using a constructor function or class, and this refers to the current instance.

```javascript
const jane = new Person('Jane', 25);
jane.greet(); // Output: Hello, Jane
```
## Four Pillars of OOP
### Inheritance
Inheritance allows one class to inherit properties and methods from another class.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.

```
### Encapsulation
Encapsulation restricts direct access to some of an object's components, which can prevent the accidental modification of data.

```javascript
class Person {
    constructor(name, age) {
        this._name = name; // Private variable convention
        this._age = age;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }
}

const person = new Person('John', 30);
console.log(person.getName()); // Output: John
person.setName('Jane');
console.log(person.getName()); // Output: Jane
```

### Polymorphism
Polymorphism allows objects to be treated as instances of their parent class rather than their actual class.

```javascript
class Animal {
    speak() {
        console.log('Animal makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks.');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows.');
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSpeak(dog); // Output: Dog barks.
makeAnimalSpeak(cat); // Output: Cat meows.
```

### Abstraction
Abstraction hides the complex implementation details and exposes only the necessary parts.

```javascript

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log('Car started.');
    }

    drive() {
        console.log('Car is driving.');
    }
}

const car = new Car('Toyota', 'Camry');
car.start(); // Output: Car started.
car.drive(); // Output: Car is driving.
```

## New Keyword

>[!note]
>Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
