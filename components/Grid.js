import React from 'react';
import { GridHelper } from 'three';

export default function Grid({
  size = 10,
  divisions = 10,
  colorCenterLine = 'white',
  colorGrid = 'grey',
}) {
  const gridHelper = new GridHelper(size, divisions, colorCenterLine, colorGrid);
  return <primitive object={gridHelper} position={[0, 0, 0]} />;
}
