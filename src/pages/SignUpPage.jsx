import styled from "styled-components"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import APIConnectionAuth from "../services/APIConnectionAuth"

export default function SignUpPage() {
  const [form, setForm] = useState( { name: "", email: "", password: "", confirmPassword: "" } )
  const navigate = useNavigate()

  function handleForm(event) {
    const { name, value } = event.target
    setForm( {...form, [name]: value } )
  }

  function handleSignUp(event) {
    event.preventDefault()

    APIConnectionAuth.signUp(form)
      .then(response => {
        console.log(response)
        alert("Cadastro criado com sucesso!")
        navigate("/")
    })
    .catch(error => console.log(error.response))
  }

  // validação password = confirm-password onKeyUp="check()"
  // tirei o autocomplete dos inputs

  return (
    <SingUpContainer>
      <form onSubmit = {handleSignUp}>
        <MyWalletLogo />
        <input
          name="name"
          placeholder="Nome"
          type="text"
          required
          value={form.name}
          onChange={handleForm}
        />
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
        <input
          name="confirmPassword"
          placeholder="Confirme a senha"
          type="password"
          required
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to = "/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
