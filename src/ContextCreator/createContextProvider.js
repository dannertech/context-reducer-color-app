
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, {createContext, useReducer} from 'react';

export default (reducer, initialState, actions) => {
    const Context = createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {}

    for(var key in actions){
        boundActions[key] = actions[key](dispatch)
    }

        return <Context.Provider value={{state, ...boundActions}}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider };
}