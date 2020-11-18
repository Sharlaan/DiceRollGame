import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import styles from './App.styles';
import { GRADIENT_COLORS, INITIAL_FACES } from './assets/CONSTANTS';
import { useOrientation } from './assets/hooks';
import { randomInteger } from './assets/utils';
import Choices from './components/Choices';
import DiceColored from './components/DiceColored';
import DiceDotted from './components/DiceDotted';
import DifficultySelector from './components/DifficultySelector';

export default function App() {
  const { orientation } = useOrientation();
  const [difficulty, setDifficulty] = useState(1);
  const [faces, setFaces] = useState(INITIAL_FACES);
  const [showResults, setShowResults] = useState(false);

  // Randomize front/right/top faces on mount
  useEffect(() => {
    const front = randomInteger(1, 6);
    const right = randomInteger(1, 6, [front, 7 - front]);
    const top = randomInteger(1, 6, [front, 7 - front, right, 7 - right]);
    setFaces({ front, right, top });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={GRADIENT_COLORS} style={styles.linearGradient}>
        <Text style={[styles.title, { width: orientation === 'LANDSCAPE' ? '100%' : '80%' }]}>
          <Headline style={styles.titleText}>
            En respectant l'ordre des mouvements du dé coloré, quelles seront les faces apparentes ?
          </Headline>
        </Text>

        <DifficultySelector
          value={difficulty}
          onChange={setDifficulty}
          style={[
            styles.difficulty,
            orientation === 'LANDSCAPE'
              ? { position: 'absolute', right: 20, bottom: 20 }
              : { position: 'relative' },
          ]}
        />

        <View
          style={[
            styles.scenesContainer,
            { flexDirection: orientation === 'LANDSCAPE' ? 'row' : 'column' },
          ]}
        >
          <DiceDotted faces={faces} showAxis showGrid />

          <DiceColored />

          <Button
            icon="replay"
            onPress={() => {}}
            color="white"
            style={{ position: 'absolute', bottom: 0, right: 0 }}
          >
            Replay animation
          </Button>
        </View>

        <Choices difficulty={difficulty} faces={faces} onSelect />

        <Button
          mode="outlined"
          onPress={() => setShowResults(true)}
          color="black"
          style={styles.submitButton}
          contentStyle={styles.submitButtonContent}
        >
          Submit
        </Button>
      </LinearGradient>
    </SafeAreaView>
  );
}
