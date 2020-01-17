import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Goal = ({ goal }) => (

  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <div>{goal.name}</div>
    <div>{goal.description}</div>
  </div>

)

Goal.propTypes = {
  name: PropTypes.string,
}

Goal.defaultProps = {
  name: ``,
}

export default Goal
