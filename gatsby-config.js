module.exports = {
    siteMetadata: {
        title: `Ola!`
    },
    plugins: [
          {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}
