const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  // const result = await graphql(`
  //   query MyQuery {
  //     getlolly {
  //       queryVlolly {
  //         linkID
  //       }
  //     }
  //   }
  // `);

  // result.data.getlolly.queryVlolly.forEach(({ linkID }) => {
  //   createPage({
  //     path: `/lolly/${linkID}`,
  //     component: path.resolve(`./src/components/PageTemplate.tsx`),
  //     context: {
  //       linkID: linkID,
  //     },
  //   });
  // });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/lolly/)) {
    page.matchPath = "/lolly/*";
    createPage(page);
  }
};
