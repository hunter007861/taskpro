import React from 'react';
import "../css/Feed.css";
import Users from "./User";
import firebase from "../api/firebase";

class Feed extends React.Component {
	constructor(props) {

		super(props);

		this.state = {
			details: [],
			apps:null
		}
		
	}
	componentDidMount() {

		firebase.database().ref("users").on("value", snapshot => {
			let details = [];
			snapshot.forEach(snap => {
				
				details.push(snap.val());
			});
            console.log(details);
			this.setState({ details: details });
		});
       
	}

	render() {
        
		return (
			<div className="feed">
				<h1>User List</h1>
				{this.state.details.map(data => {
					console.log(data.account);
					
					return(
						<Users
							username={data.name}
							account={data.account}
							message=""
						/>
						)

				})}
			</div>
		);
	}
}


export default Feed;