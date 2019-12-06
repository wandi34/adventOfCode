export function shortestDirectCrossFromStart(wire1: string[], wire2: string[]): number {
  const cursorList_w1: string[] = iterateWire(wire1)
  const cursorList_w2: string[] = iterateWire(wire2)

  const crossedCursors: string[] = Array.from(getSameElements(new Set(cursorList_w1), new Set(cursorList_w2)))
  const distances: number[] = crossedCursors.map(c => Math.abs(Number(c.split('|')[0])) + Math.abs(Number(c.split('|')[1])))
  return distances.sort((a, b) => a - b)[0]
}

export function shortestWiredCrossFromStart(wire1: string[], wire2: string[]): number {
  const cursorList_w1: string[] = iterateWire(wire1)
  const cursorList_w2: string[] = iterateWire(wire2)

  const crossedCursors: string[] = Array.from(getSameElements(new Set(cursorList_w1), new Set(cursorList_w2)))
  const distances: number[] = crossedCursors.map(c => findIndexInWire(c, cursorList_w1) + findIndexInWire(c, cursorList_w2))
  return distances.sort((a, b) => a - b)[0]
}

function findIndexInWire(cursor: string, wire: string[]): number {
  return wire.findIndex(c => c === cursor)
}

function getSameElements(cursorSet1: Set<string>, cursorSet2: Set<string>): Set<string> {
  let result: Set<string> = new Set()
  cursorSet1.forEach(cursor => {
    if (cursorSet2.has(cursor) && cursor !== "0|0") {
          result.add(cursor)
        }
  })
  return result
}

function iterateWire(wire: string[]): string[] {
  let cursorList: string[] = ["0|0"];
  wire.map(rule => {
    const inst = rule.substring(0, 1);
    const steps = Number(rule.substring(1));
    cursorList = calculate(steps, inst, cursorList);
  });
  return cursorList
}

function calcNewCursor(cursor: string, addition: string): string {
  const cursorSplitted: string[] = cursor.split('|')
  const additionSplittet: string[] = addition.split('|')
  return `${Number(cursorSplitted[0]) + Number(additionSplittet[0])}|${Number(cursorSplitted[1]) + Number(additionSplittet[1])}`
}

function calculate(steps: number, inst: string, cursorList: string[]): string[] {
  while (steps > 0) {
    const lastCursor = cursorList[cursorList.length - 1];
    cursorList.push(calcNewCursor(lastCursor, getCalculation(inst)))
    --steps
  }
  return cursorList
}

function getCalculation(instruction: string): string {
  switch (instruction) {
    case "R": return "1|0"
    case "L": return "-1|0"
    case "U": return "0|1"
    case "D": return "0|-1"
    default: throw new Error(`Given instruction ${instruction} is not valid.`)
  }
}
