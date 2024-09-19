const typeDefs = `
type User {
    username: String
    password: String
    email: String
    pets: [Pet]
    orders: [Order]
}

type Pet {
    animal: String
    size: String
    allergies: [String]
}

type Order {
    purchaseDate: String
    products: Product
    users: [User]
}

type Product {
    name: String
    description: String
    image: String
    price: Float
    ingredients: [String]
    isDogFood: Boolean
}

type Query {
    users: [User]
<<<<<<< HEAD
    orders: [Order]
=======
    orders: Order
>>>>>>> 0cb5fa3cda1dfc0fc4a03e2e9df5ec4d87066b0f
    pets: [Pet]
}

// type Mutation {
//     addUser(username: String!, email: String, password: String!): User
//     addOrder(userId: ID!, products: [ID!]!): Order
//     addPet(animal: String!, size: String!, allergies: [String]): Pet
// }
`;


module.exports = typeDefs;