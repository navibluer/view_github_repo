import logo from '../logo.svg';
import React from 'react';
import '../App.css';

class SeachForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);
		window.location.href = `/users/${this.state.value}/repos`;
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit = {this.handleSubmit}>
				<label>
					
					<div style = {{fontWeight: 'bold'}} >
						Input User Name:
					</div>

					<input 
						value = {this.state.value}
						onChange = {this.handleChange} 
						placeholder = {'username'}
						type = {'text'}
					>
					</input>

				</label>
			</form>
		);
	}
}

function Home() {
	return (
		<div className = 'App'>
			<header className = 'App-header'>

				<h2><i>Search Users on Github</i></h2>
				
				<img
					src = {logo}
					className = 'App-logo'
					alt='logo'
				/>

				<SeachForm />

			</header>
		</div>
	);
}



export default Home;