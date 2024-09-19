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

type Query {
    users: [User]
    orders: [Orders]
    pets: [Pet]
}

type Mutation {
    addUser(username: String!, email: String, password: String!): User
    addOrder(userId: ID!, products: [ID!]!): Order
    addPet(animal: String!, size: String!, allergies: [String]): Pet
}
`;
// The typeDefs is crazy maybe we could all take a look at the queris/mutations parts. I believe I set the tables refs correctly. I could be wrong though

module.exports = typeDefs;