import gql from "graphql-tag";
import { messages } from "../data/Messages.js";

export const typeDefs = gql`
  extend type Query {
    messages: [Message!]
  }

  type Message {
    id: ID!
    user: String!
    content: String!
  }
`;

export const resolvers = {
  Query: {
    messages: () => messages,
  },
  Message: {
    id: ({ id }) => id,
    user: ({ user }) => user,
    content: ({ content }) => content,
  },
};
