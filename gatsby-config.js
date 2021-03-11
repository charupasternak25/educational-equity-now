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
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/een-icon.webp', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      trackingIds: [
        "G-11WLVD2096"
      ],
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-material-ui`
  ],
  
}
