import React, { Component } from "react";

class ClassMouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
        };
    }

    logMousePosition = (event) => {
        this.setState({ x: event.clientX, y: event.clientY });
    };

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePosition);
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove", this.logMousePosition);
    }

    render() {
        return (
            <>
                X: {this.state.x} Y: {this.state.y}
            </>
        );
    }
}

export default ClassMouse;