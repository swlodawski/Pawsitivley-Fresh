import { gql } from '@apollo/client';

export const QUERY_PET = gql`
{
pet {
    animal
    name
    size
    allergies
    }
}`;

export const QUERY_PRODUCT = gql`
{
product {
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
order {
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
user {
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

