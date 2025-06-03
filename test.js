import knightMoves from "./knightMoves.js";

runTest([0, 0], [3, 3]);
runTest([3, 3], [0, 0]);
runTest([0, 0], [7, 7]);
runTest([0, 0], [0, 7]);
runTest([0, 0], [5, 7]);

function runTest(position1, position2) {
  console.log(
    "knightMoves(" +
      JSON.stringify(position1) +
      ", " +
      JSON.stringify(position2) +
      ") "
  );
  let positions = knightMoves(position1, position2);

  console.log(
    `You made it in ${positions.length - 1} moves! Here's your path:`
  );
  for (const position of positions) {
    console.log(JSON.stringify(position));
  }
  console.log("");
}
