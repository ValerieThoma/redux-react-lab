export default function(state=[], action){
	if(action.type === "ADD_COUNTRY"){
		const newState = [...state];
		// console.log("previos state: ", newState)
		newState.push(action.payload)//pushing it in
		return newState
	}else if(action.type === "GET_HISTORY"){
		console.log(action.payload)
		return action.payload
	}else if (action.type === "DELETE_ALL"){
		console.log("current state", [...state]);
		return [];
	}else{
		return state;
	}
}