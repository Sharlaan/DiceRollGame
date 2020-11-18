import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { MathUtils } from 'three';

const { randInt } = MathUtils;

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
export function useOrientation() {
  const { height, width } = useWindowDimensions();
  const isPortrait = () => height >= width;
  const [orientation, setOrientation] = useState(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

  useEffect(() => {
    setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');
  }, [height, width]);

  return { orientation, height, width };
}
