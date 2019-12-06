export function crossedWires(wire1: string[], wire2: string[]): number {
  const cursorList_w1: String[] = iterateWire(wire1)
  const cursorList_w2: String[] = iterateWire(wire2)

  const crossedCursors: String[] = Array.from(getSameElements(cursorList_w1, cursorList_w2))
  const distances: number[] = crossedCursors.map(c => Math.abs(Number(c.split('|')[0])) + Math.abs(Number(c.split('|')[1])))
  return distances.sort((a, b) => a - b)[0]
}

function getSameElements(cursorList1: String[], cursorList2: String[]): Set<String> {
  let result: Set<String> = new Set()
  const cursorSet1 = new Set(cursorList1)
  const cursorSet2 = new Set(cursorList2)
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
    if (inst === "R") {
      cursorList = rightAdd(steps, cursorList)
    } else if (inst === "L") {
      cursorList = leftAdd(steps, cursorList)
    } else if (inst === "U") {
      cursorList = upAdd(steps, cursorList)
    } else if (inst === "D") {
      cursorList = downAdd(steps, cursorList)
    }
  });
  return cursorList
}

function addToString(string: string, input: string): string {
  const stringAsNumber: string[] = string.split('|')
  const inputAsNumber: string[] = input.split('|')
  return `${Number(stringAsNumber[0]) + Number(inputAsNumber[0])}|${Number(stringAsNumber[1]) + Number(inputAsNumber[1])}`
}

function rightAdd(steps: number, cursorList: string[]): string[] {
  while (steps > 0) {
    const lastCursor = cursorList[cursorList.length - 1];
    cursorList.push(addToString(lastCursor, "1|0"))
    --steps
  }
  return cursorList
}

function leftAdd(steps: number, cursorList: string[]): string[] {
  while (steps > 0) {
    const lastCursor = cursorList[cursorList.length - 1];
    cursorList.push(addToString(lastCursor, "-1|0"))
    --steps
  }
  return cursorList
}

function upAdd(steps: number, cursorList: string[]): string[] {
  while (steps > 0) {
    const lastCursor = cursorList[cursorList.length - 1];
    cursorList.push(addToString(lastCursor, "0|1"))
    --steps
  }
  return cursorList
}

function downAdd(steps: number, cursorList: string[]): string[] {
  while (steps > 0) {
    const lastCursor = cursorList[cursorList.length - 1];
    cursorList.push(addToString(lastCursor, "0|-1"))
    --steps
  }
  return cursorList
}
