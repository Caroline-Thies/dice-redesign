export default function LoginForm(props) {
  console.log(JSON.stringify(props))

  return (
    <div className="login_form">
      <form className="flexcol">
        <h1>Einloggen</h1>

        <input type="text" placeholder="E-Mail Adresse" className="textinput" />
        <input type="password" placeholder="Passwort" className="textinput" />
        <button type="submit" className="important_button" onClick={props.login}>
          Einloggen
        </button>
        <button className="linkButton" onClick={props.showRegister}>stattdessen registrieren</button>
      </form>
    </div>
  );
}
