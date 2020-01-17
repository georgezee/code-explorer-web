import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Goal from "../components/goal"

const GoalPage = () => {

  // Client-side Runtime Data Fetching
  const [goals, setGoals] = useState(null)
  useEffect(() => {
    // get data from GitHub api
    console.log("fetching ...");
    fetch(`https://api.alongthevine.com/v1/get-goals`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log("fetched ...");
        console.log(resultData);
        setGoals(resultData.goals)
      }) // set data for the number of stars
  }, [])

  let goalsOutput = "Loading ...";
    if (goals) {
      goalsOutput = goals.map((goal, i) => {
      return (<Goal key={i} goal={goal} />)
    })
  }

  return (
    <Layout>
      <SEO title="Goals" />

      Goals:<br/>

      <div>
        {goalsOutput}
      </div>

      <Link to="/">Home</Link>
    </Layout>
  )
}
export default GoalPage