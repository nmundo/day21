// User related variables and function
let userName = "Jerry";
let isActive = true;

// Arrow function to get user info
let getUserInfo = (name, status) => {
  name = userName;   // Sets name to userName
  status = isActive; // Sets status to isActive

  return "Username: " + name + " status: " + status; // Returns a string of user info
};

getUserInfo(); // Returns "Username: Jerry status: true"

class User {
  constructor(name, status) {
      this.name = name;   // Assigns name to the User instance
      this.status = status; // Assigns status to the User instance
  }
  getUserInfo() {
      return this.name + this.status; // Returns a string combining user and status
  }
}

const createUser = function(name, status) {
  return {
    name: name,
    status: status,
  };
}


// Creating instances of the User class
const Jerry = new User("Jerry", true);
const Mary = new User("Mary", true);
const Saj = new User("Saj", true);

// Define a Car class
class Car {
  constructor(model, make, year, speed = 60, time = 1) {
    this.model = model; // Assigns model to the Car instance
    this.make = make;   // Assigns make to the Car instance
    this.year = year;   // Assigns year to the Car instance
    this.speed = speed;    // Default speed in mph
    this.time = time;      // Default time in hours
  }

  mph() {
    return this.speed / this.time; // Calculates speed in miles per hour
  }
}

let sedan = new Car("Civic", "Honda", 2020, 75); // Creates a new instance of Car
let suv = new Car("CR-V", "Honda", 2020); // Creates a new instance of Car
let ev = new Car("Model 3", "Tesla", 2020); // Creates a new instance of Car

// Define a Book class
class Book {
  constructor(title, author, year) {
    this.title = title; // Assigns title to the Book instance
    this.author = author; // Assigns author to the Book instance
    this.year = year; // Assigns year to the Book instance
  }
  getBookSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
    // Returns a formatted string summarizing the book
  }
  getBookAge() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old.`;
    // Returns the age of the book
  }
  reviseYear(newYear) {
    this.year = newYear; // Updates the year of the book
    this.revised = true; // Marks the book as revised
  }
  static getTopBookStore() {
    return "Barnes & Noble"; // Returns the name of a bookstore
  }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 1997); // Creates a new instance of Book
let book2 = new Book("The Alchemist", "Paulo Coelho", 1988); // Creates a new instance of Book
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925); // Creates a new instance of Book

class CookBook extends Book {
  constructor(title, author, year, typeOfFood) {
    super(title, author, year); // Calls the parent class constructor
    this.typeOfFood = typeOfFood; // Additional property specific to CookBook
  }
}

let cookBook1 = new CookBook("The Joy of Cooking", "Irma S. Rombauer", 1931, "American Cuisine"); // Creates a new instance of CookBook
let cookBook2 = new CookBook("Mastering the Art of French Cooking", "Julia Child", 1961, "French Cuisine"); // Creates a new instance of CookBook

class BakingBook extends CookBook {
  constructor(title, author, year, typeOfFood, typeOfBaking) {
    super(title, author, year, typeOfFood); // Calls the parent class constructor
    this.typeOfBaking = typeOfBaking; // Additional property specific to BakingBook
  }
}