import { gql } from '@apollo/client';

export const QUERY_PET = gql`
{
pets {
    animal
    name
    size
    allergies
    }
}`;

export const QUERY_PRODUCT = gql`
{
products {
    name
    description
    image
    price
    ingredients
    isDogFood
    }
}`;

export const QUERY_ORDER = gql`
{
orders {
    purchaseDate
    product {
        name
        description
        image
        price
        ingredients
        isDogFood
    user {
        userName
        email
        password
        }
    }
}
}`;

export const QUERY_USER = gql`
{
users {
    userName
    email
    password
    pet {
        animal
        name
        size
        allergies
    order {
        purchaseDate {
        products
        }
    }
}
}
}`;

