const MIN_POSITION = 0;
const MAX_POSITION = 7;
const POSSIBLE_MOVES = [
  [1, 2], // right 1 up 2
  [1, -2], // right 1 down 2
  [2, 1], // right 2 up 1
  [2, -1], // right 2 down 1
  [-1, 2], // left 1 up 2
  [-1, -2], // left 1 down 2
  [-2, 1], // left 2 up 1
  [-2, -1], // left 2 down 1
];
const MAX_ITERATIONS = 1000;

function knightMoves(startPosition, endPosition) {
  if (!isValidInput(startPosition) || !isValidInput(endPosition)) {
    return null;
  }

  let possiblePaths = [];
  let iterations = 0;
  possiblePaths.push([[...startPosition]]);

  while (possiblePaths.length > 0 && iterations < MAX_ITERATIONS) {
    let possiblePath = possiblePaths.shift();
    let lastPosition = possiblePath[possiblePath.length - 1];

    if (equals(lastPosition, endPosition)) {
      return possiblePath;
    }

    let possibleMoves = getPossibleMoves(lastPosition);

    for (const move of possibleMoves) {
      if (!contains(possiblePath, move)) {
        let newPath = copy(possiblePath);
        newPath.push(move);

        if (equals(move, endPosition)) {
          return newPath;
        } else {
          possiblePaths.push(newPath);
        }
      }
    }

    iterations++;
  }
}

function isValidInput(input) {
  return (
    Array.isArray(input) &&
    input.length === 2 &&
    isValidValue(input[0]) &&
    isValidValue(input[1]) &&
    isValidPosition(input)
  );
}

function isValidValue(value) {
  return typeof value === "number" && Math.floor(value) === value;
}

function isValidPosition(position) {
  return isValidNumber(position[0]) && isValidNumber(position[1]);
}

function isValidNumber(number) {
  return number >= MIN_POSITION && number <= MAX_POSITION;
}

function equals(start, end) {
  return start[0] === end[0] && start[1] === end[1];
}

function contains(path, position) {
  return path.filter((val) => equals(val, position)).length > 0;
}

function getPossibleMoves(position) {
  let possibleMoves = [];

  for (const move of POSSIBLE_MOVES) {
    let temp = [position[0] + move[0], position[1] + move[1]];

    if (isValidPosition(temp)) {
      possibleMoves.push(temp);
    }
  }
  return possibleMoves;
}

function copy(path) {
  return path.map((position) => [...position]);
}

export default knightMoves;
