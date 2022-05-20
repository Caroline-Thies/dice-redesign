import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DiceRollResult from "../components/DiceRollResult";
import NumberPicker from "../components/NumberPicker";
import { rollD6 } from "../DiceRoller";
import getBestProbability from "../ProbabilityCalculator";

export default function AppView(props) {
  const { state } = useLocation();
  const { app, wisdom, kraftgruppe } = state;

  const name = app.name;
  const min = app.minValue;
  const max = app.maxValue;
  const desc = app.description;
  const maxConcentration = wisdom;
  const kgLevel = kraftgruppe;

  const [availableDice, setAvailableDice] = useState(kgLevel);
  const [toSacrifice, setToSacrifice] = useState(0);
  const [toRoll, setToRoll] = useState(0);
  const [newMin, setNewMin] = useState(min);
  const [newMax, setNewMax] = useState(max);
  const [successRate, setSuccessRate] = useState(0);
  const [concentration, setConcentration] = useState(0);
  const [timelessKnowledge, setTimelessKnowledge] = useState(0);
  const [investedDice, setInvestedDice] = useState(0);
  const [diceResult, setDiceResult] = useState([]);
  const [showDiceResult, setShowDiceResult] = useState(false);

  useEffect(() => {
    console.log(availableDice);
    const result = getBestProbability(availableDice, min, max, false);
    setToRoll(result.toRoll);
    setSuccessRate(result.successRate);
    setToSacrifice(availableDice - result.toRoll);
    setNewMin(min - toSacrifice);
    setNewMax(max + toSacrifice);
  }, [availableDice]);
  useEffect(
    () =>
      setAvailableDice(
        kgLevel + concentration + timelessKnowledge - investedDice
      ),
    [concentration, timelessKnowledge, investedDice]
  );

  const rollDice = () => {
    const result = rollD6(toRoll, true);
    setDiceResult(result);
    setShowDiceResult(true);
  };

  const calcDiceResult = () => {
    let sum = 0;
    for (let i = 0; i < diceResult.length; i++) {
      sum += diceResult[i];
    }
    return sum;
  };

  const getRollResultMessage = () => {
    const result = calcDiceResult();
    if (newMin <= result && result <= newMax) {
      return (
        <p className="large">
          Die Probe war <span className="greenText">erfolgreich</span>
        </p>
      );
    } else {
      return (
        <p className="large">
          Die Probe ist <span className="redText">fehlgeschlagen</span>
        </p>
      );
    }
  };

  const renderDiceResult = () => {
    if (showDiceResult) {
      return (
        <div className="flexcol">
          <DiceRollResult rollResult={diceResult} />
          <p>Ergebnis: {calcDiceResult()}</p>
          {getRollResultMessage()}
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="flexcol">
      <h1>{name}</h1>
      <p className="bold">
        {min} - {max}
      </p>
      <div className="appDescription">{desc}</div>
      <div>
        <h4>Konzentration</h4>
        <NumberPicker
          name="Konzentration"
          max={maxConcentration}
          selected={concentration}
          onChange={setConcentration}
          startsWithZero={true}
        />
      </div>
      <div>
        <h4>Zeitloses Wissen</h4>
        <NumberPicker
          name="Zeitloses Wissen"
          max={5}
          selected={timelessKnowledge}
          onChange={setTimelessKnowledge}
          startsWithZero={true}
        />
      </div>
      <div>
        <h4>Investierte Würfel</h4>
        <NumberPicker
          name="Investierte Würfel"
          max={kgLevel + concentration + timelessKnowledge}
          selected={investedDice}
          startsWithZero={true}
          onChange={setInvestedDice}
        />
      </div>
      <div className="textContainer">
        <p>Verfügbare Würfel: {availableDice}</p>
        <p>
          Du solltest <span className="redText">{toSacrifice}</span> Würfel
          opfern und mit <span className="greenText">{toRoll}</span> Würfeln in
          den neuen Trefferbereich von{" "}
          <span className="bold">
            {newMin}-{newMax}
          </span>{" "}
          würfeln. Die Erfolgswahrscheinlichkeit liegt dann bei ca.{" "}
          <span className="greenText large">
            {Math.round(successRate * 100) / 100}%
          </span>
          .
        </p>
      </div>
      {renderDiceResult()}
      <button className="important_button" onClick={rollDice}>
        Mit dieser Verteilung würfeln!
      </button>
    </div>
  );
}
