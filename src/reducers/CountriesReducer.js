export default function(state=[], action){
	if(action.type === "ADD_COUNTRY"){
		const newState = [...state];
		newState.push(action.payload)
		return newState
	}else{
		return state;
	}
}