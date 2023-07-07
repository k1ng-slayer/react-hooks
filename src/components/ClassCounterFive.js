import React, { Component } from "react";

export class ClassCounterFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title"); // we notice that document updates unnecessarily everytime so we implement conditional update
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })} // previously we have used 'onChangeHandler'
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count}
        </button>
      </>
    );
  }
}

export default ClassCounterFive;
