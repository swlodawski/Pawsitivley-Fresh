import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $username: String!, $password: String!) {
login(email: $email, username: $username, password: $password:) {
    token
        user{
        _id}
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $userName: String!
    $email: String!
    $password: String!) {
addUser (
    userName: userName
    email: $email
    password: $password) {
    token
    user {
    _id}
    }
}`;

export const ADD_PET = gql`
mutation addPet(
    $animal: String!
    $name: String!
    $size: String!
    $allergies: allergies!) {
addPet(
    animal: $animal)
    name: $name
    size: $size
    allergies: $allergies
}`;

export const ADD_PRODUCT = gql`
mutation addProduct(
    $name: String!
    $description: String
    $image: String
    $price: Number
    $ingredients: [String]
    $isDogFood: Boolean
    ) {
addProduct(
    name: $name
    description: $description
    image: $image
    price: $price
    ingredients: $ingredients
    isDogFood: $isDogFood)
    }
    `;

    