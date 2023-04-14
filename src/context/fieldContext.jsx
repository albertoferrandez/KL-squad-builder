import * as React from 'react';
import { tresDosUno } from './formation';

export const FieldContext = React.createContext()

export const FieldContextProvider = ({ children }) => {

    const [field, setField] = React.useState(tresDosUno)

    console.log(field)

    return(
        <FieldContext.Provider value={{field, setField}}>
            {children}
        </FieldContext.Provider>
    )
}