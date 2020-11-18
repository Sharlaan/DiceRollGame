import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useOrientation } from '../assets/hooks';
import DiceDotted from './DiceDotted';

export default function Choices({ difficulty, faces, onSelect }) {
  const { orientation } = useOrientation();
  const [selection, setSelection] = useState();
  const [active, setActive] = useState(false);

  const handleClick = () => console.log('onClick') || setActive(!active);

  const handleClick2 = useCallback(() => console.log('onClick') || setActive(!active), [
    active,
    setActive,
  ]);

  const nbItems = Math.min(6, difficulty * 2);

  // Only case when flexWrapping is necessary is when:
  // - orientation PORTRAIT
  // - item width < 1/3 of screen width
  const choiceWidth = difficulty === 1 ? 50 : Math.max(33.33, 100 / difficulty);

  return (
    <View
      onPress={handleClick2}
      style={[{ width: '100%' }, { height: orientation === 'LANDSCAPE' ? 100 : 200 }]}
    >
      <Text style={{ color: 'lime' }}>
        Correct answer with
        {[1, 2, 3, 4, 6, 7].includes(difficulty)
          ? ' 1 SINGLE CLICK'
          : ' 3 DROPPED FACES (or 3 INPUTS)'}
      </Text>
      <Text style={{ color: 'white' }}>
        Selection {selection} {active ? 'true' : 'false'}
      </Text>

      <View
        onPress={() => handleClick}
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'stretch',
            borderWidth: 1,
          },
          { borderColor: active ? 'blue' : 'white' },
        ]}
      >
        {Array.from({ length: nbItems }, (_, i) => (
          <DiceDotted
            key={i}
            onClick={handleClick}
            onSelect={() => console.log('onSelect') || setSelection(i)}
            showAxis={false}
            showGrid={false}
            style={{ flexBasis: orientation === 'PORTRAIT' ? `${choiceWidth}%` : 1 }}
          />
        ))}
      </View>
    </View>
  );
}
