import { useState, createContext } from "react"

export const Context = createContext()

export function GeneralContext ( {children } ) {
    const [ token, setToken ] = useState(localStorage.getItem("token"))

    return (
        <Context.Provider value={ { token, setToken } }>
            { children }
        </Context.Provider>
    )
}