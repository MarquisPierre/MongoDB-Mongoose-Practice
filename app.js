const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Fruits Database 
const fruitsSchema = new mongoose.Schema({
   name: String,
   rating: Number,
   review: String
})

const Fruit = mongoose.model("Fruit", fruitsSchema)

const apple = new Fruit({
  name: "Apple",
  rating: "8",
  review:"Yummy as Heck!!"
})


const grapes = new Fruit({
  name: "Grapes",
  rating: "10",
  review: "It is my favorite fruit!!"
})

const oranges = new Fruit({
  name: "Orange",
  rating: "9",
  review: "I honestly like it more than apples LOL!!"
})

// Fruit.insertMany([apple, grapes, oranges], (err) => {
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Succesfully saved all fruits to fruitsDB");
//   }
// })


Fruit.find((err, fruits) => {
  if(err){
    console.log(err);
  }else{
    
    mongoose.connection.close()

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    console.log(" ");
  }
});






// People Database
const personSchema = new mongoose.Schema({
   name: String,
   age: Number
})



const Person = mongoose.model("Person", personSchema)

const Marquis = new Person({
  name:"Marquis",
  age: 23
})

const Oleksiy = new Person({
  name: "Oleksiy",
  age: 23
})

const Luz = new Person({
  name: "Luz",
  age: 24
})



// Person.insertMany([Marquis, Oleksiy, Luz], (err) => {
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Succesfully saved all persons to fruitsDB");
//   }
// })


Person.find((err, people) => {
  if(err){
    console.log(err);
  }else{
    people.forEach((person) => {
      console.log(person.name);
    });
    console.log(" ");
  }
})



