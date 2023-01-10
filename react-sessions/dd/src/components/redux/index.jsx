export const initialState = {
    counter:0
}

export const reducer=(state,action)=> {
    switch(action.type){
        case "ARTTIR" :
            return {...state, counter:state.counter++}
        case "AZALT" :
            return {...state, counter:state.counter--}
        case "RESET" :
            return  initialState
        default : 
        return state
    }
}