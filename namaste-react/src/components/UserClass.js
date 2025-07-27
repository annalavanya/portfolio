import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value:0,
            value1:1
        }
        console.log(this.props.name, "child constructor is called");
    }

    componentDidMount() {
        console.log(this.props.name, "child componentDidMount is called");
    }

    render() {
        const { name } = this.props;
        console.log(this.props.name, "child render is called");
        return (
            <div className="user-card">
                <h5>Count: {this.state.value}</h5> <h5>Count1: {this.state.value1}</h5>
                <button onClick={() => this.setState({ value: this.state.value+1 })}>Increase button</button>
                <h5>Name: {name}</h5>
        </div>
        )
    }
}
export default UserClass;