// let url;
// if (process.env.NODE_ENV === "development") {
//   url = "http://localhost:8888";
// } else {
//   url = "https://maaviasghar-vlolly.netlify.app";
// }

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "LOLLY",
    //     fieldName: "getlolly",
    //     url: `https://maaviasghar-vlolly.netlify.app/.netlify/functions/graphql-vlolly`,
    //   },
    // },
  ],
};
