const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Fruits Database 
const fruitsSchema = new mongoose.Schema({
   name:{
    type: String,
   required: [true, "Uh....why fruit have no Name??"]
   } ,
   rating: {
    type: Number,
    min: 1,
    max: 10
   },
   review: String
})

const Fruit = mongoose.model("Fruit", fruitsSchema)


const cherry = new Fruit({
  name: "Cherry",
  rating: "4",
  review: " it is okay i guess.."
})

const peach = new Fruit({
  name:"Peach",
  rating: "7",
  review: "Not my favorite fruit but I still enjoy it!"
})

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


// Fruit.updateOne({_id: "62b893c4fce74fad9d772649"}, {rating: "6"} , (err) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Document was updated");
//   }
// })


// Fruit.deleteOne({name:"Peach"}, (err) => {
//   if(err){
//         console.log(err);
//       }else{
//         console.log("Document was deleted");
//       }
// })



// People Database
const personSchema = new mongoose.Schema({
   name: String,
   age: Number,
   favoriteFruit: fruitsSchema
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


// Person.find((err, people) => {
//   if(err){
//     console.log(err);
//   }else{
    
//     people.forEach((person) => {
//       console.log(person.name);
//     });
//     console.log(" ");
    
//   }
// })



