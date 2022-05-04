import { gql } from "apollo-server";

const root = gql`
  type Response {
    status: String!
    message: String!
  }

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default root;
