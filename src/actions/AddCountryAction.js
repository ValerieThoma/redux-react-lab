export default ((countryName)=>{
	// console.log("seriously, what the hell?");
	console.log("action fired up", countryName)
	return{
		type: 'ADD_COUNTRY',
		payload: countryName
	}
})