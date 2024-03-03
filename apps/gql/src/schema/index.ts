import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  typeDefs as MessageTypeDefs,
  resolvers as MessageResolvers,
} from "./Message.js";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const QueryResolvers = {
  Query: {
    _empty: () => {},
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, MessageTypeDefs],
  resolvers: [QueryResolvers, MessageResolvers],
});
