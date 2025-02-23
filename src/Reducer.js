 const reducer = (state, action) =>{
    if(action.type === "TOGGLE_THEME"){
        state.isdarkMode = !state.isdarkMode
        const mode = localStorage.setItem("TOGGLE_DARKTHEME", JSON.stringify(state.isdarkMode))
        return{
            ...state,
            ...mode
        }

    } return state
}
export default reducer;
   
