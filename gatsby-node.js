const fetch = require('node-fetch');
const URL = 'https://petstore.swagger.io/v2/swagger.json';

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const data = await fetch(URL);
  const json = await data.json();
  createNode(toNode(json));
  return;
}

function toNode(data) {
  const node = {
    id: 'willFix',
    internal: { type: 'swagger', contentDigest: 'willFix' },
  };

  Object.entries(data).forEach(([key, value]) => {
    node[key] = value;
  });

  return node;
}
