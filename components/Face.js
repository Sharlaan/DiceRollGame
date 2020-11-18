import React from 'react';
import { MathUtils } from 'three';
import { DICE_COLOR, DICE_SIZE, DOT_COLOR, DOT_SIZE, MAPPING } from '../assets/CONSTANTS';

const { degToRad } = MathUtils;

export default function Face({ n = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry attach="geometry" args={[DICE_SIZE, DICE_SIZE]} />
        <meshStandardMaterial attach="material" color={DICE_COLOR} />
      </mesh>

      {MAPPING[n].map(({ x, y }, index) => (
        <Dot key={index} position={[x, y, 0.01]} />
      ))}
    </group>
  );
}

function Dot({ position }) {
  return (
    <mesh position={position}>
      <circleGeometry attach="geometry" args={[DOT_SIZE, 16]} />
      <meshStandardMaterial attach="material" color={DOT_COLOR} />
    </mesh>
  );
}
