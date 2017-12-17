import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCountryAction from '../actions/AddCountryAction';
import { bindActionCreators } from 'redux';


class AddCountry extends Component{
	constructor(){
		super();
		this.addCountry = this.addCountry.bind(this);	
	}


	addCountry(event){
		event.preventDefault();
		const country = document.getElementById('new-country').value;
		console.log(country);
		this.props.countries(country);
	}

	render(){
		return(
			<div>
			 <h1>Countries</h1>
		        <form onSubmit={this.addCountry}>
		          <input id="new-country" type="text" placeholder="add country"/>
		          <button type="submit" className="btn btn-warning">ADD</button>
		        </form>
		    </div> 
		)   
	}	

}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		 countries: AddCountryAction
	},dispatch);
}

export default connect(null, mapDispatchToProps)(AddCountry);
