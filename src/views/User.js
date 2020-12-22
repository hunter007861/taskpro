import React from 'react';
import "../css/User.css";
import firebase from "../api/firebase";

class User extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            apps: null
        }

    }

    componentDidMount() {

        firebase.database().ref("accounts/" + this.props.account).once('value', snapshot => {
            let apps;
            snapshot.forEach(snap => {

                apps = snap.val()
            });        

            this.setState({ apps: apps });
        });
    }

    render() {
        console.log(this.state.apps);
        return (
            <div className="user">
                <div className="userName">
                    <h3>{this.props.username}</h3>
                    <p>{this.props.account}</p>
                </div>
                <div className="appDetail">
                    <p>App: {this.state.apps}</p>
                    <p>Rating:⭐⭐⭐⭐</p>
                </div>

            </div>
        );
    }
}

export default User;