import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Graph from "../components/graph"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Menu</h1>
    <Link to="/request-transfer/">Request Transfer</Link>
  </Layout>
)

export default IndexPage
