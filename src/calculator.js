function add(numbers) {
	if(numbers == "") {
		return 0;
	}
	if(numbers.includes(",") || numbers.includes("\n")) {

		var numberArray = numbers.split(/[,\n]/);

		if(checkNegatives(numberArray) == false) {
			return sum(numberArray);	
		}

		return parseInt(numbers);
	}
	else {
		if(parseInt(numbers) < 0) {
			throw("Negatives not allowed: " + numbers);
		}
		return parseInt(numbers);
	}
}

function checkNegatives(numberArray) {
	var negativeArray = [];
	j = 0;
	for(var i = 0; i < numberArray.length; i++) {
		if(parseInt(numberArray[i]) < 0 ) {
			negativeArray[j] = parseInt(numberArray[i]);
			j++;
		}
	}
	if(negativeArray.length > 0) {
		throw("Negatives not allowed: " + negativeArray.map(Number));
		return true;
	}
	return false;
}

function sum(numberArray) {

	var sum = 0;
	for(var i = 0; i < numberArray.length; i++) {
		sum += parseInt(numberArray[i]);
	}

	return sum;
}

module.exports = add;
