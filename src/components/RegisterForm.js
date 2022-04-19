export default function RegisterForm(props) {
  return (
    <div className="login_form">
      <form className="flexcol">
        <h1>Registrieren</h1>

        <input type="text" placeholder="E-Mail Adresse" className="textinput" />
        <input type="password" placeholder="Passwort" className="textinput" />
        <input
          type="password"
          placeholder="Passwort bestätigen"
          className="textinput"
        />
        <button type="submit" className="important_button">
          Registrieren
        </button>
        <button className="linkButton">stattdessen einloggen</button>
      </form>
    </div>
  );
}
