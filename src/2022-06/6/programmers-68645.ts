/**
 * 68645. 삼각 달팽이
 * https://programmers.co.kr/learn/courses/30/lessons/68645
 */
interface Position {
  y: number;
  x: number;
}

export function solution(n: number): number[] {
  const result = Array.from({ length: n }).map((_, i) =>
    new Array(i + 1).fill(0)
  );

  function nextPosition(position: Position, direction: number): Position {
    const dy = [1, 0, -1];
    const dx = [0, 1, -1];
    return {
      y: position.y + dy[direction],
      x: position.x + dx[direction],
    };
  }

  let position = {
    y: -1,
    x: 0,
  };
  let value = 0;
  let direction = 0;
  for (let i = n; 0 < i; i--) {
    for (let j = 0; j < i; j++) {
      position = nextPosition(position, direction);
      result[position.y][position.x] = ++value;
    }
    direction = (direction + 1) % 3;
  }

  return result.flatMap((row) => row);
}
