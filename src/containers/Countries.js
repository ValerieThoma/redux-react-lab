import React, { Component } from 'react';
import { connect } from 'react-redux';
import GetHistory from '../actions/GetHistory';
import { bindActionCreators } from 'redux';


class Countries extends Component{

	
	componentDidMount(){
		console.log('component did mount')
		var currentList = localStorage.getItem('list')
		const json = JSON.parse(currentList, 10)//means parsing in decimal base
		console.log("from localStorage ", json, typeof(json))
		if (json){ //if json exists and not null => run action to get history
			this.props.getHistory(json);
		}
	}	

	componentDidUpdate(){
		console.log("componentDidUpdate fired up")
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getHistory: GetHistory
	},dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Countries);
