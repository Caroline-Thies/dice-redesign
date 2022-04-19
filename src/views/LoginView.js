import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function LoginView(props) {
  return (
    <div className="login_page">
      <div className="login_content_background">
        <div className="login_content_text">
          <span className=" ">weniger rechnen</span>
          <span className="login_line_two">mehr spielen.</span>
          <div>
            <p>Spielst du einen Psi-Nutzer in NoReturn?</p>
            <p>
              Würdest du gerne spontan mächtige Apps wirken, hast aber Angst aus
              Versehen dein ganzes Team durch einen schlechten Wurf zu töten?
            </p>
            <p>
              Grummeln deine Freunde, wenn du mal wieder mehrere Minuten Würfel
              umher schiebst und eventuell sogar einen Taschenrechner
              herausholst, bevor du endlich deinen Zug im Kampf machst?
            </p>
            <p>
              Dann solltest du den inoffiziellen NoReturn PsiCalculator
              verwenden!
            </p>
            <p>
              Diese Seite berechnet individuell für deinen Charakter und deine
              aktuelle Situation räzise die Erfolgswahrscheinlichkeit jeder App
              - und das in Echtzeit!
            </p>
            <p>
              Noch nie war es so einfach, den Tod deiner Freunde in ein
              wohlkalkuliertes Risiko zu verwandeln.
            </p>
          </div>
        </div>
      </div>
      <div className="login_form_container">
        <RegisterForm />
      </div>
    </div>
  );
}
