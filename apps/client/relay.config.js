module.exports = {
  src: "./src",
  language: "typescript",
  eagerEsModules: true,
  schema: "../gql/src/schema/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
