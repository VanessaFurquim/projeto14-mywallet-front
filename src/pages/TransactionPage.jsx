import styled from "styled-components"
import { useContext, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Context } from "../contexts/GeneralContext"
import APIConnectionTransactions from "../services/APIConnectionTransactions"

export default function TransactionsPage() {
  const { tipo } = useParams()
  const { token } = useContext(Context)
  const [form, setForm] = useState( {amount: "", description: ""} )
  const navigate = useNavigate()

  function handleForm(event) {
    const { name, value } = event.target
    setForm( {...form, [name]: value } )
  }

  function handleTransaction(event) {
    event.preventDefault()

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      if (!token) return alert("Token inválido!")
  
      const promise = axios.post(`${import.meta.env.VITE_API_URL}/nova-transacao/${tipo}`, form, config)
      .then(response => {
        console.log(response)
        navigate("/home")
      })
      .catch(error => {
        alert("Algo deu errado!")
         console.log(error)
      })
  }
    
    // APIConnectionTransactions.addEntryTransaction(form)
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error))

  return (
    <TransactionsContainer>
      <h1>Nova {tipo}</h1>
      <form onSubmit = {handleTransaction}>
        <input
        name="amount"
          placeholder="Valor"
          type="text"
          data-test="registry-amount-input"
          required
          value={form.amount}
          onChange={handleForm}
        />
        <input
        name="description"
          placeholder="Descrição"
          type="text"
          data-test="registry-name-input"
          required
          value={form.description}
          onChange={handleForm}
        />
        <button type="submit" data-test="registry-save">Salvar {tipo}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
