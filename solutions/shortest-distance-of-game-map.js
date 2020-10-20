function solution(maps) {
  let answer = 0;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const visitedQueue = [[0, 0]];
  const visited = new Array(maps.length)
    .fill()
    .map((x) => new Array(maps[0].length).fill(false));
  visited[0][0] = 1;
  while (visitedQueue.length > 0) {
    const now = visitedQueue.shift();
    const x = now[0];
    const y = now[1];
    if (x === maps.length - 1 && y === maps[0].length - 1) {
      answer = visited[x][y];
      break;
    }
    for (let i = 0; i < directions.length; i++) {
      const nextX = x + directions[i][0];
      const nextY = y + directions[i][1];
      if (
        nextX < 0 ||
        nextX >= maps.length ||
        nextY < 0 ||
        nextY >= maps[0].length ||
        maps[nextX][nextY] == 0
      ) {
        continue;
      }
      if (visited[nextX][nextY]) continue;
      visited[nextX][nextY] = visited[x][y] + 1;
      visitedQueue.push([nextX, nextY]);
    }
  }

  return answer ? answer : -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
