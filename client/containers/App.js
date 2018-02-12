import React, {Component} from 'react';
import LoginPage from './LoginPage'

export default class App extends Component {
  render () {
  	localStorage.setItem("value", "5");
  	return(
  		<div className="page_wrapper">
				<div className="container">
					<LoginPage history={this.props.history}/>
				</div>
			</div>		
		)	
  }
}