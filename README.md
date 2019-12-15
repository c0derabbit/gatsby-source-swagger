## gatsby-source-swagger

this will be a swagger source for gatsby. for now it can be copied locally and put in a `plugins/gatsby-source-swagger` folder, and the swagger.json is hard coded.

in `gatsby-config.js`, add `gatsby-source-swagger` to plugins.

```graphql
{
  swagger {
    paths {
      ...
    }
  }  
}
```
