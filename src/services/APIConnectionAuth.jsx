import axios from "axios"

function signUp (body) {
    
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)

    return promise
}


function signIn (body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/`, body)

    return promise
}

const APIConnectionAuth = { signUp, signIn }

export default APIConnectionAuth