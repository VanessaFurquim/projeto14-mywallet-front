import styled from "styled-components"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import APIConnectionAuth from "../services/APIConnectionAuth"

export default function SignInPage() {
  const [form, setForm] = useState( { email: "", password: "" } )
  const navigate = useNavigate()

  function handleForm(event) {
    setForm( {...form, [event.target.name]: event.target.value } )
  }

  async function handleSignIn(event) {
    event.preventDefault()

    APIConnectionAuth.signIn(form)
    .then(response => {
      console.log("then")
      console.log(response)
      localStorage.setItem("token", response.data)
      navigate("/home")
  })
  .catch(error => {
      console.log("catch")
      console.log(error)
      alert(error.response.data.message)
  })
      // .then(response => {
      //   console.log(response)
      //   navigate("/home")
      // } )
      // .catch( error => { console.log(error) } )

  }

  return (
    <SingInContainer>
      <form onSubmit = {handleSignIn}>
        <MyWalletLogo />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          required
          value={form.email}
          onChange={handleForm}
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          required
          value={form.password}
          onChange={handleForm}
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to = "/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
