import React, { useCallback, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { DICE_SIZE, FACE_COLORS } from '../assets/CONSTANTS';
import Axis from './Axis';
import Grid from './Grid';

export default function DiceColored({ position }) {
  const defaultCamera = { fov: 40, position: [25, 25, 50], zoom: 3 };
  // const axesHelper = new AxesHelper(DICE_SIZE);

  const [active, setActive] = useState(false);
  const handleClick = useCallback(() => console.log('onClick') || setActive(!active), [
    active,
    setActive,
  ]);

  return (
    <Canvas
      camera={defaultCamera}
      style={{ borderWidth: 1, borderColor: 'red' }}
      onPress={handleClick}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <primitive object={axesHelper} position={[0, 0, 0]} /> */}
      <Axis length={DICE_SIZE + 1} />
      <Grid size={DICE_SIZE * 4} divisions={DICE_SIZE * 4} />

      <DiceMesh position={position} isActive={active} />
    </Canvas>
  );
}

/**
 * Needs to be internalized inside Canvas for hooks to work and access React context
 * https://github.com/pmndrs/react-three-fiber/blob/hotfix-pointer-events/api.md#hooks
 * */
function DiceMesh({ isActive, position }) {
  // const [active, setActive] = useState(false);

  // const mesh = useRef();
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(({ scene }) => {
    // if (mesh?.current) {
    //   mesh.current.rotation.x = mesh.current.rotation.y += 0.02;
    // }
    const box = scene.getObjectByName('box');
    box.rotation.x = box.rotation.y += 0.02;
  });

  // const handleClick = useCallback(() => console.log('onClick') || setActive(!active), [active]);

  const materials = FACE_COLORS.map((color) => (
    <meshBasicMaterial key={color} attachArray="material" color={color} />
  ));

  return (
    <mesh
      name="box"
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
      scale={isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onPress={(e) => console.log('pressed DiceColored Mesh')
      onPointerUp={(e) => console.log('onPointerUp') || setActive(!active)}
      onPointerMissed={(e) => console.log('onPointerMissed') || setActive(!active)}
    >
      <boxGeometry attach="geometry" args={[DICE_SIZE, DICE_SIZE, DICE_SIZE]} />
      {materials}
    </mesh>
  );
}
