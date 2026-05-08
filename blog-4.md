# The Four Pillars of OOP in TypeScript

## Introduction

Object-Oriented Programming (OOP) helps developers organize code in a clean and scalable way.  
In large TypeScript projects, the four pillars of OOP reduce complexity and improve maintainability.

The four pillars are:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

---

# 1. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

```ts
class Animal {
    makeSound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {}

const dog = new Dog();
dog.makeSound();


Benefit
Reduces duplicate code
Improves reusability


2. Polymorphism

Polymorphism allows different classes to use the same method differently.

class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}


Benefit:

Makes code flexible
Easier to extend features



3. Abstraction

Abstraction hides complex implementation details and shows only necessary functionality.

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MyPlayer extends MediaPlayer {
  play() {
    console.log("Playing music...");
  }
  pause() {
    console.log("Music paused!");
  }
  stop() {
    console.log("Music stopped!");
  }
}

const player = new MyPlayer();
player.play();


Benefit:

Reduces complexity
Keeps code clean and understandable


4. Encapsulation

Encapsulation protects data by restricting direct access.

class User {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }
}

Benefit:

Improves security
Prevents unwanted data changes


Conclusion

The four pillars of OOP help large TypeScript projects by:

Reducing code duplication
Improving maintainability
Hiding complexity
Making code reusable and secure

These concepts make applications easier to manage and scale.