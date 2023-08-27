import axios from "axios"

function signUp (body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)
    .then(response => {
        alert("Cadastro criado com sucesso!")
        setForm( { name: "", email: "", password: "", confirmPassword: "" })
        // confirmPassword precisa ?
    })
    .catch(error => alert(error.response.data))

    return promise
}

const APIConnectionAuth = { signUp }

export default APIConnectionAuth