const defaultState = {
    busket: []
}

export const busketReducer = (state = defaultState,action) => {
    switch (action.type){
        case "ADD_TO_BUSKET":
            console.log("adding busket",action.payload)
            return {
                ...state,
                busket:[...state.busket, action.payload]
            }
        default:return state
    }
};

export default busketReducer;