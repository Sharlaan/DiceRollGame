import { MathUtils } from 'three';
const { randInt } = MathUtils;

/** Generate a random integer within [min, max], with exclusions if applicable */
export function randomInteger(min, max, exclusions = []) {
  if (!exclusions.length) return randInt(min, max);

  const filteredArray = Array.from({ length: max }, (_, index) => index + min).filter(
    (v) => !exclusions.includes(v),
  );
  const randomIndex = randInt(0, filteredArray.length - 1);
  return filteredArray[randomIndex];
}
