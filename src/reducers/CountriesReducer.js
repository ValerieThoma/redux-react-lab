export default function(state=[], action){
	if(action.type === "ADD_COUNTRY"){
		const newState = [...state];
		// console.log("previos state: ", newState)
		newState.push(action.payload)//pushing it in
		return newState
	}else if(action.type === "GET_HISTORY"){
		return action.payload
	}
	else{
		return state;
	}
}