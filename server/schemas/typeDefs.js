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
    orders: [Order]
    pets: [Pet]
}

type Mutation {
    addUser(username: String!, email: String, password: String!): User
    addOrder(userId: ID!, products: [ID!]!): Order
    addPet(animal: String!, size: String!, allergies: [String]): Pet
}
`;


module.exports = typeDefs;