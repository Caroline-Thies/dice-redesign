export default function LoginForm(props) {
  return (
    <div className="login_form">
      <form className="flexcol">
        <h1>Einloggen</h1>

        <input type="text" placeholder="E-Mail Adresse" className="textinput" />
        <input type="password" placeholder="Passwort" className="textinput" />
        <button type="submit" className="important_button">
          Einloggen
        </button>
        <button className="linkButton">stattdessen registrieren</button>
      </form>
    </div>
  );
}
