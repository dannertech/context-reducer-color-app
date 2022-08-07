
export const reducer = (state, action) => {
    switch(action.type){
        case 'INCREASE_RED':
            return {...state, red: state.red += 1}
        case 'INCREASE_BLUE':
            return {...state, blue: state.blue += 1}
        case 'INCREASE_GREEN':
            return {...state, green: state.green += 1}
        default:
            return state
    }
}

export const initialState = {
    red: 255,
    green: 100,
    blue: 100
}

 