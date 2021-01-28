module.exports = {
  siteMetadata: {
    title: 'Educational Equity Now',
    author: 'Charu Pasternak',
    description: 'A Gatsby.js V2 powered website for sharing free educational resources',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/globe-icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
