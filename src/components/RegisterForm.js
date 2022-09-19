import { useState } from "react";

export default function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  return (
    <div className="login_form">
      <form
        className="flexcol"
        onSubmit={() => props.register(username, password, passwordRepeat)}
      >
        <h1>Registrieren</h1>

        <input
          type="text"
          placeholder="E-Mail Adresse"
          className="textinput"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          className="textinput"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort bestätigen"
          className="textinput"
          onChange={(event) => setPasswordRepeat(event.target.value)}
        />
        <button type="submit" className="important_button">
          Registrieren
        </button>
        <button className="linkButton" onClick={props.showLogin}>
          stattdessen einloggen
        </button>
      </form>
    </div>
  );
}
