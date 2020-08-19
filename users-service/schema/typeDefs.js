import {gql} from 'apollo-server-express';

const typeDefs = gql `
    type Query {
        me: User!
        user(id: ID!): User
        users: [User]!
    }

    type Mutation {
        insert(
            username: String!
            email: String!
            password: String!
            imageURL: String
        ):User!

        update(
            id: ID!
            username: String!
            email: String!
            password: String!
            imageURL: String!
        ):Data!

        delete(id: ID!):Data!
    }

    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        createdAt: String
        updatedAt: String
        imageURL: String
    }

    type Data {
        data: String!
    }
`;

export default typeDefs;