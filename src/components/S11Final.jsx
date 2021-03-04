import React, { Component } from "react";
import UncontrolledLottie from './UncontrolledLottie';




class S11Final extends Component {
	

	state = {
		username: "",
	};
 
	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (
			
			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Are On Your Way To Saving On Your <b>Home</b> Insurance</h1>
				<br></br>
				<div className="container pt-0 main-content-container">			
				 <UncontrolledLottie/>
				<p className="center"> A Quantum Assurance Agent Will Be With You Shortly!</p>
				</div>
			</div>
		);
	}
}

export default S11Final;
