module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "LOLLY",
        fieldName: "getlolly",
        url: "http://localhost:8888/.netlify/functions/graphql-vlolly",
      },
    },
  ],
};
