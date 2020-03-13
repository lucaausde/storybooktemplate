import React from "react";
const axios = require("axios");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: [] };
  }
  componentDidMount() {
    var self = this;
    axios
      .get("http://localhost:3000/api/Homepage")
      .then(function(response) {
        self.setState({ id: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <h1>{this.state.id.title}</h1>
        <h2>Hallo, {this.state.id.name}</h2>
      </>
    );
  }
}

export default Home;
