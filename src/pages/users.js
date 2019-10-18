import React from "react"
import axios from "axios"
//

class Users extends React.Component {
  // State will apply to the posts object which is set to loading by default
  state = {
    posts: [],
    isLoading: true,
    errors: null
  };

  // Now we're going to make a request for data using axios
  getPosts() {
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios
      // This is where the data is hosted
      .get("http://code-explorer.azurewebsites.net/api/ListUsers")
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPosts();
  }
  // Putting that data to use
  render() {
    const { isLoading, posts } = this.state;
    return (
      <React.Fragment>
        <h2>Users</h2>
        <div>
          {!isLoading ? (
            posts.map(post => {

              return <div>{post}</div>
              const { _id, title, content } = post;
              return (
                <div key={_id}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Users