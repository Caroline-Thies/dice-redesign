export const rollD6 = (count, withHazardDie) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result[i] = Math.floor(Math.random() * 6) + 1;
  }
  if (withHazardDie) {
    while (result[result.length - 1] === 6) {
      result.push(Math.floor(Math.random() * 6) + 1);
    }
  }
  return result;
};
