const { db } = require("./database")
const {Pet} = require('./models')

const pets = [
  {
    name: "Duck",
    description: "This is a bird that is free at the local pond. You could literally go pick it up, but no. You have to purchase it illegally here.",
    price: 149.99,
    discount: false
  },
  {
    name: "Dog",
    description: "This is the best friend to all humans. You really want one, I know you do. I'll even give you a discount.",
    price: 0.01,
    discount: true
  },
  {
    name: "Doduo",
    description: "What are we doing selling a pokemon from a video game? Wait - it's an actual real-life Doduo? oh wow, that's actually really cool.",
    price: 14999.95,
    discount: false
  },
  {
    name: "Daddy Long Legs",
    description: "I really don't see why you would want to buy something like this...",
    price: 2.99,
    discount: false
  },
  {
    name: "Drill",
    description: "This isn't even a pokemon, this is a scam at this point.",
    price: 249.99,
    discount: false
  },
]

const seedDatabase = async() => {
  pets.forEach(async (animal) => {
    await Pet.create({
      name: animal.name,
      description: animal.description,
      price: animal.price,
      discount: animal.discount
    })
  })
}

module.exports = {seedDatabase}