import React from 'react';
import { ArrowHelper, Vector3 } from 'three';

export default function Axis({
  directions = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] },
  origin = [0, 0, 0],
  length = 1,
  colors = { x: 'red', y: 'lime', z: 'blue' },
  headLength,
  headWidth,
}) {
  const xAxis = new ArrowHelper(
    new Vector3(...directions.x),
    new Vector3(...origin),
    length,
    colors.x,
    headLength,
    headWidth,
  );

  const yAxis = new ArrowHelper(
    new Vector3(...directions.y),
    new Vector3(...origin),
    length,
    colors.y,
    headLength,
    headWidth,
  );

  const zAxis = new ArrowHelper(
    new Vector3(...directions.z),
    new Vector3(...origin),
    length,
    colors.z,
    headLength,
    headWidth,
  );

  return (
    <>
      <primitive object={xAxis} />
      <primitive object={yAxis} />
      <primitive object={zAxis} />
    </>
  );
}
