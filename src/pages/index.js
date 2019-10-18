import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Graph from "../components/graph"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Enter your team or user name</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Graph/>
      <Image />
    </div>
    <Link to="/page-2/">Goals</Link>
  </Layout>
)

export default IndexPage
