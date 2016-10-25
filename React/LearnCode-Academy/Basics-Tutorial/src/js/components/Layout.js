import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      person: "Will"
    };
  }

  changePerson(person) {
    this.setState({person});
  }

  render() {
    return (
      <div>
        <Header changePerson={this.changePerson.bind(this)} person={this.state.person} />
        <Footer />
      </div>
    );
  }
}