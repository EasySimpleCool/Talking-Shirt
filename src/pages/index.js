import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Go on. Say something</h1>
    <p>We specialise in high quality custom printed tees that send a message. test</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
