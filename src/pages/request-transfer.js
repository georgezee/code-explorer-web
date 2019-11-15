import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class RequestTransfer extends React.Component {
  state = {
    user: "",
    amount: "",
    response: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  sendData() {
    // Clear previous message.
    this.setState({
      response: ''
    });

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    let url = `https://api.alongthevine.com/v1/request-transfer?user=${this.state.user}&amount=${this.state.amount}`;

    axios
      .get(url)
      .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
        console.log(response.data.message);
        this.setState({ response: response.data.message });
      })
      .catch(error => {
        if (!error.message) {
          error.message = "Sorry, something went wrong";
        }
        this.setState({ response: error.message});
        console.log(error);
      });
  }

  handleSubmit = event => {
    let request = new XMLHttpRequest();
    this.sendData();
    event.preventDefault();
  }
  render() {
    return (
      <Layout>
        <SEO title="Transfer Request" />

        <div>{this.state.response}</div>

        <form onSubmit={this.handleSubmit}>
          <label>
            User
            <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Amount
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}