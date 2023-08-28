import axios from "axios"
import { useParams } from "react-router-dom"
// import { Context } from "../contexts/GeneralContext"
// import { useContext } from "react"

function addEntryTransaction (body) {
    const { tipo } = useParams()
    // const { token } = useContext(Context)

    // const config = {
    //     headers: {
    //       Authorization: `Bearer ${token.token}`
    //     }
    // }

    const promise = axios.post(`${import.meta.env.VITE_API_URL}/nova-transacao/${tipo}`, body)

    // console.log(config)

    return promise
}

const APIConnectionTransactions = { addEntryTransaction }

export default APIConnectionTransactions