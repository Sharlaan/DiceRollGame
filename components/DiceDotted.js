import React from 'react';
import { StyleSheet } from 'react-native';
import { Canvas } from 'react-three-fiber';
import { DICE_SIZE, INITIAL_FACES } from '../assets/CONSTANTS';
import Axis from './Axis';
import Face from './Face';
import Grid from './Grid';

export default function DiceDotted({
  faces = INITIAL_FACES,
  position,
  rotation = [0, 0, 0],
  onClick,
  onSelect,
  style,
  showAxis = false,
  showGrid = false,
}) {
  const defaultCamera = { fov: 40, position: [25, 25, 50], zoom: 3 };
  // const axesHelper = new AxesHelper(DICE_SIZE);

  return (
    <Canvas onPress={onClick} camera={defaultCamera} style={{ ...styles.container, ...style }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <primitive object={axesHelper} position={[0, 0, 0]} /> */}
      {showAxis && <Axis length={DICE_SIZE + 1} />}
      {showGrid && <Grid size={DICE_SIZE * 4} divisions={DICE_SIZE * 4} />}

      <group onClick={onSelect} position={position}>
        {/* FRONT */}
        <Face n={faces.front} position={[0, 0, DICE_SIZE / 2]} />

        {/* BACK */}
        {/* <Face n={7 - faces.front} rotation={[0, Math.PI, 0]} position={[0, 0, -DICE_SIZE / 2]} /> */}

        {/* RIGHT */}
        <Face n={faces.right} rotation={[0, Math.PI / 2, 0]} position={[DICE_SIZE / 2, 0, 0]} />

        {/* LEFT */}
        {/* <Face n={7 - faces.right} rotation={[0, -Math.PI / 2, 0]} position={[-DICE_SIZE / 2, 0, 0]} /> */}

        {/* TOP */}
        <Face n={faces.top} rotation={[-Math.PI / 2, 0, 0]} position={[0, DICE_SIZE / 2, 0]} />

        {/* BOTTOM */}
        {/* <Face n={7 - faces.top} rotation={[Math.PI / 2, 0, 0]} position={[0, -DICE_SIZE / 2, 0]} /> */}
      </group>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: 'yellow' },
});
