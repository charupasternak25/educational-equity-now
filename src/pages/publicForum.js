import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout'

const PublicForum = () => (
  <Layout>
    <h1>Public Forum</h1>
    {/* <p>Welcome to page 2</p> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PublicForum
