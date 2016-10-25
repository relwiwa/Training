import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

  // class' constructor method
  constructor() {
    super();  // needs to be called before everything else
    this.mother = "Jane"; // class attribute
  }

  // class method
  getVal() {
    return "Hey there, too!!";
  }

  // render method
  render() {
    // simple component logic can be put inside render method
    const name = "Jackson";
    return (
      <div>
        <h1>Let's see what we can do</h1>
        <ul>
          <li>This is just static text.</li>
          <li>This is the value of a constant: {name}</li>
          <li>This is the result of some maths: {5 + 8}</li>
          <li>This is the return value of some IIFE: {(function() { return "Hey, there!"; })()}</li>
          <li>This is the return value of a class method: {this.getVal()}</li>
          <li>This is the value of a class attribute: {this.mother}</li>
        </ul>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
