import axios from "axios"

// async function signUp (body) {

//     try {
//         const promise = await axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)
//         console.log(promise.config.data)
//         alert("Cadastro criado com sucesso!")
//         // setForm({ nome: "", email: "", senha: "" })
//         console.log(promise)
        
//         return promise
//     } catch (error) { 
//         console.log(error)
//         console.log("erro do catch")
//     }
// }

function signUp (body) {
    
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, body)
        // .then(response => {
        //     //  response é um parâmetro / is never used
        //     console.log(response)
        //     alert("Cadastro criado com sucesso!")
        //     return response
        //     // setForm( { name: "", email: "", password: "", confirmPassword: "" })
        //     //  import form
        // })
        // .catch(error => console.log(error.response))

    return promise
}


function signIn (body) {
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/`, body)
        // .then(response => {
        //     console.log("then")
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log("catch")
        //     console.log(error)
        //     alert(error.response.data.message)
        // })

    return promise
}

const APIConnectionAuth = { signUp, signIn }

export default APIConnectionAuth