import { useState } from "react";

export default function LoginForm(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="login_form">
      <form className="flexcol" onSubmit={(event) => event.preventDefault()}>
        <h1>Einloggen</h1>

        <input type="text" placeholder="E-Mail Adresse" className="textinput" onChange={event => setUsername(event.target.value)} />
        <input type="password" placeholder="Passwort" className="textinput" onChange={event => setPassword(event.target.value)} />
        <button type="submit" className="important_button" onClick={() => props.login(username, password)}>
          Einloggen
        </button>
        <button className="linkButton" onClick={props.showRegister}>stattdessen registrieren</button>
      </form>
    </div>
  );
}
