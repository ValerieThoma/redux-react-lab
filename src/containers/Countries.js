import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AddCountryAction from '../actions/AddCountryAction';

class Countries extends Component{
	
	componentDidMount(){
		console.log('component did mount')
		var currentList = localStorage.getItem('list')
		const json = JSON.parse(currentList, 10)//means parsing in decimal base
		console.log("after parse from localStorage ", json, typeof(json))
	}	


	componentDidUpdate(){
		console.log('componentDidUpdate current: ', this.props.countryList)
		if (this.props.countryList !== 0){
		const json = JSON.stringify(this.props.countryList)
		localStorage.setItem("list", json)
		}
	}

	render(){
		var countryArray = this.props.countryList.map((country,index)=>{
	      return(<li key={index}>{country}</li>)
	    })
		return(
			<div className="big">
				{countryArray}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		countryList: state.countries
	}
	
}




export default connect(mapStateToProps)(Countries);
