export const GRADIENT_COLORS = ['#013f5c', '#032235'];

export const DICE_SIZE = 5;
export const DICE_COLOR = 'white';

export const FACE_COLORS = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow'];

export const DOT_SIZE = (DICE_SIZE * 10) / 100;
export const DOT_COLOR = 'red';

export const INITIAL_FACES = { front: 1, right: 3, top: 5 };

export const MAX_DIFFICULTY = 10;

/** positioning step within a 2x2 grid */
export const PSTEP = DICE_SIZE / 4;

/**
 * Maps Face's number with dot's absolute positions within the 4-cadrans-divided square, and transformations
 * Note: n ranges from 1 to 6,
 * n = 0 being the undefined face
 */
export const MAPPING = [
  [],
  // FACE 1
  [{ x: 0, y: 0 }],
  // FACE 2
  [
    { x: PSTEP, y: PSTEP },
    { x: -PSTEP, y: -PSTEP },
  ],
  // FACE 3
  [
    { x: PSTEP, y: PSTEP },
    { x: 0, y: 0 },
    { x: -PSTEP, y: -PSTEP },
  ],
  // FACE 4
  [
    { x: PSTEP, y: PSTEP },
    { x: PSTEP, y: -PSTEP },
    { x: -PSTEP, y: -PSTEP },
    { x: -PSTEP, y: PSTEP },
  ],
  // FACE 5
  [
    { x: PSTEP, y: PSTEP },
    { x: PSTEP, y: -PSTEP },
    { x: 0, y: 0 },
    { x: -PSTEP, y: -PSTEP },
    { x: -PSTEP, y: PSTEP },
  ],
  // FACE 6
  [
    { x: PSTEP, y: PSTEP },
    { x: -PSTEP, y: 0 },
    { x: PSTEP, y: -PSTEP },
    { x: -PSTEP, y: -PSTEP },
    { x: PSTEP, y: 0 },
    { x: -PSTEP, y: PSTEP },
  ],
];
