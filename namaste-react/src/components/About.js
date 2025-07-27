import React from 'react';
import User from './User';
import UserClass from './UserClass';


class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");

        this.state = {
            userObj: {
                avatar_url: '',
                id: 0,
                login: ''
            }
        }
    }

    componentDidMount() {
        console.log("parent componentDidMount is called");
        this.getValues();
    }

    async getValues () {
        const data = await fetch("https://api.github.com/users/annalavanya");
        const json = await data.json();

        this.setState({
            userObj: json
        });

        this.count = setInterval(() => {
            console.log("SET INTERVAL");
        }, 2000);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
        clearInterval(this.count);
    }

    render() {
        console.log("parent render is called");
        const { avatar_url, id, login} = this?.state?.userObj;
        return (!this?.state?.userObj?.avatar_url || !this?.state?.userObj?.login) ? <h1>Loading...</h1> : (
            <div>
                <h3>This is a About us Page</h3>
                <img src={avatar_url} alt='Image'></img>
                <h4>ID: {id}</h4>
                <h4>NAME: {login}</h4>
                <UserClass  name={"jeni class"}/>
            </div>
        );
    };
};
export default About;

