export function programAlarm(program) {
  var result = [...program]
  for (let i = 0; i < program.length; i += 4) {
    if (result[i] === 1) {
      console.log('Sum')
      result[result[i + 3]] = result[result[i + 1]] + result[result[i + 2]]
    } else if (result[i] === 2) {
      console.log('Multiply')
      result[result[i + 3]] = result[result[i + 1]] * result[result[i + 2]]
    } else if (result[i] === 99) {
      break
    } else {
      throw Error('Error in program with number ' + program[i] + ' at position ' + i)
    }
  }
  console.log(result)
  return result
}