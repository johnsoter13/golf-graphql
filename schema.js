export const typeDefs = `#graphql
  type Score {
    id: ID!
    courseName: String!
    score: Int!
    courseRating: Float!
    courseSlope: Int!
    playedAt: String!
  }

  type Query {
    scores: [Score!]!
    score(id: ID!): Score
  }
`;