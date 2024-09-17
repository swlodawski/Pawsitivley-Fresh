const typeDefs = `
type User {
username: String
password: String
email: String
pets: [Pet]
orders: [Order]
}
type Order{
date: Date
user: [Users]

type Pet {
animal: String
size: String
allergies: [String]
}
type Order {
date: Date
products: [Product]
users: [User]
}

type Query {
users: [user]

}


type Mutation {

}
`;
// The typeDefs is crazy maybe we could all take a look at the queris/mutations parts. I believe I set the tables refs correctly. I could be wrong though

module.exports = typeDefs;