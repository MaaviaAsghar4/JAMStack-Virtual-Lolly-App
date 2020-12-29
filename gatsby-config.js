let url;

process.env.NODE_ENV === "development"
  ? (url = "http://localhost:8888")
  : (url = "https://maaviasghar-vlolly.netlify.app");

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "LOLLY",
        fieldName: "getlolly",
        url: `${url}/.netlify/functions/graphql-vlolly`,
        forceFullSync: true,
        refetchInterval: 3,
      },
    },
  ],
};
