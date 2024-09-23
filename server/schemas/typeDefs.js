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
    products: [Product]
    user: User
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    ingredients: [String]
    isDogFood: Boolean
}

type Query {
    user(id: ID!): User 
    users: [User]
    order(id: ID!): Order 
    orders: [Order]
    pet(id: ID!): Pet 
    pets: [Pet]
    product(id: ID!): Product   
    products: [Product]
}

type Mutation {
    addUser(username: String!, email: String, password: String!): User
    updateUser(id: ID!, username: String, email: String, password: String): User
    deleteUser(id: ID!): User

    addPet(animal: String!, size: String!, allergies: [String]): Pet
    updatePet(id: ID!, animal: String, size: String, allergies: [String]): Pet
    deletePet(id: ID!): Pet

    addOrder(userId: ID!, products: [ID!]!): Order
    updateOrder(id: ID!, userId: ID, products: [ID!]): Order
    deleteOrder(id: ID!): Order

    addProduct(
        name: String!,
        description: String!,
        image: String!,
        price: Float!,
        ingredients: [String!]!,
        isDogFood: Boolean!
    ): Product
    updateProduct(
        id: ID!,
        name: String,
        description: String,
        image: String,
        price: Float,
        ingredients: [String],
        isDogFood: Boolean
    ): Product
    deleteProduct(id: ID!): Product
}
`;

module.exports = typeDefs;
