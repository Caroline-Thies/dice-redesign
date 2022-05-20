import maxValProbs from "./probabilitiesMaxVal";
import minValProbs from "./probabilitiesMinVal";

export default function getBestProbability(
  maxDice,
  minValue,
  maxValue,
  mastered
) {
  // check if dice > 0
  if (maxDice < 1) {
    return { successRate: 0, toRoll: 0 };
  }

  // calculate chance of success for every dice distribution
  let probs = [];
  for (let i = 0; i < maxDice; i++) {
    const toRoll = i + 1;
    const invested = maxDice - toRoll;
    probs.push(
      getResultInRangeProb(toRoll, minValue - invested, maxValue + invested)
    );
  }
  console.log("probs: " + probs);

  // find best dice distribution with highest chance of success
  let bestIndex = 0;
  for (let i = 0; i < maxDice; i++) {
    if (probs[i] > probs[bestIndex]) {
      bestIndex = i;
    }
  }
  let successRate = probs[bestIndex];
  const toRoll = bestIndex + 1;

  // adjust chance if mastered
  if (mastered) {
    const failChance = 1 - successRate;
    successRate = 1 - failChance * failChance;
  }

  return { successRate: successRate, toRoll: toRoll };
}

const getResultInRangeProb = (dice, minVal, maxVal) => {
  console.log("dice: " + dice);
  console.log("minVal: " + minVal);
  console.log("maxVal: " + maxVal);
  const minValProb = minVal > 0 ? minValProbs[dice][minVal] / 100 : 1;
  console.log("minValProb: " + minValProb);
  const maxValProb = maxValProbs[dice][maxVal] / 100;
  console.log("maxValProb: " + maxValProb);
  return minValProb * maxValProb * 100;
};
