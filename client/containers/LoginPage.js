import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	value: '',
    	count: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
    	value: event.target.value
    })
  }

  handleSubmit(event) {
  	if(this.state.value.length > 1) {
  		alert("Please enter value between 0-10")
  	} 
  	else {
	    if(this.state.value == localStorage.getItem("value")){
	    	this.setState({
	    		value: ''
	    	})
	    	alert("LOGIN SUCCESSFULL")
	    }
	    else{
	    	this.setState({
		    	count: this.state.count + 1,
		    	value: ''
		    })
	    	if(this.state.count == 2){
	    		this.props.history.push('LogoutPage')
	    	}
	    }
	  }
  }

  render() {
    return (
      <div>
      	<p>Enter a number between 0-10</p>
        <label className="labelStyle">
          Number:
          <input className="inputFeild" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button className="submitButton" onClick={this.handleSubmit}>Submit</button>
        <p>Attempts done : {this.state.count}</p>
      </div>
    );
  }
}
