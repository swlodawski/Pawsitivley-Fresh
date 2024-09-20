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
    orders: Order
    pets: [Pet]
}


`;


module.exports = typeDefs;