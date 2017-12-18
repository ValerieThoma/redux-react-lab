export default function(state=[], action){
	if(action.type === "ADD_COUNTRY"){
		const newState = [...state];
		console.log("previos state: ", newState)
		newState.push(action.payload)//pushing it in
		return newState
	}else{
		return state;
	}
}