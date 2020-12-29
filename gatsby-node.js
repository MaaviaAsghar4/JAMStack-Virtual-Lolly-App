const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      getlolly {
        queryVlolly {
          linkID
        }
      }
    }
  `);

  console.log(JSON.stringify(result));

  result.data.getlolly.queryVlolly.forEach(({ linkID }) => {
    createPage({
      path: `/lolly/${linkID}`,
      component: path.resolve(`./src/components/PageTemplate.tsx`),
      context: {
        linkID: linkID,
      },
    });
  });
};
