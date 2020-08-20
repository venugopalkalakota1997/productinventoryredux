

const productClickedReducer = function productClickedReducer(state = null, action){
    switch (action.type) {
        case "SELECT_PRODUCT":
            console.log("Action with payload productedit in reducer!")
            console.log(action.payload);
            
            return action.payload    
        default:
            break;
    }
   return state

}

export default productClickedReducer