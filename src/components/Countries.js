import React, { Component } from 'react';
import { connect } from 'react-redux';


class Countries extends Component{
	render(){
		var countryArray = this.props.countryList.map((country,index)=>{
	      return(<li key={index}>{country}</li>)
	    })
		return(
			<div>
				<li>{countryArray}</li>
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
