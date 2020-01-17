import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Graph from "../components/graph"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Menu</h3>
    <Link to="/request-transfer/">Request Transfer</Link>
    <br/>
    <Link to="/goals/">Goals</Link>
  </Layout>
)

export default IndexPage
