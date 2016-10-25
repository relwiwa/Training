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

  render() {
    setTimeout(() => {
      this.setState({
        person: "Bob"
      });
    }, 2000);

    return (
      <div>
        <Header person={this.state.person} />
        <Header person={"Jill"} />
        <Footer />
      </div>
    );
  }
}