module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "LOLLY",
        fieldName: "getlolly",
        url: "https://maaviasghar-vlolly.netlify.app/.netlify/functions/graphql-vlolly",
      },
    },
  ],
};
