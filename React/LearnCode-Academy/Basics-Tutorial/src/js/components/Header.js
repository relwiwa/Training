import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {

  handleChange(e) {
    const person = e.target.value;
    this.props.changePerson(person);
  }

  render() {
    return (
      <div>
        <Title person={this.props.person} />
        <input value={this.props.person} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
