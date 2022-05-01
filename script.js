let numArr = ['a', 1, 65, "lmfao", 22]

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'even';
  } else if (number === 5) {
    return 5;
  } else if (isNaN(number)) {
    return NaN;
  } else if (number % 2 !== 0) {
    return 'odd';
  }
}

function find_total(my_numbers) {
  let points = 0
	for (i = 0; i < my_numbers.length; i++) {
    let pointDecision = evenOrOdd(numArr[i])

		switch (pointDecision) {
			case 'even':
				points += 1
        console.log(`The number ${numArr[i]} was even. This is the ${i + 1} number in the list. The user now has ${points} points.`)
				break;
			case 5:
				points += 5
        console.log(`The number ${numArr[i]} was 5. This is the ${i + 1} number in the list. The user now has ${points} points.`)
				break;
			case 'odd':
				points += 3
        console.log(`The number ${numArr[i]} was odd. This is the ${i + 1} number in the list. The user now has ${points} points.`)
        break;
      default:
        console.log("The user must not have entered a number.")
        break;
				}
		}
    console.log(`The total amount of points was ${points}.`)
}

find_total(numArr)

