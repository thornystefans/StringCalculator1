function add(numbers) {

	if(numbers == "") {
		return 0;
	}
	var numberArray = [];
	if(numbers.charAt(0) == "/" && numbers.charAt(1) == "/") {
		var delimiter = numbers.charAt(2);
		var numbers = numbers.slice(4, numbers.length);
		numberArray = numbers.split(delimiter);
	}

	else if(numbers.includes(",") || numbers.includes("\n")) {
		numberArray = numbers.split(/[,\n]/);
	}
	else {
		if(parseInt(numbers) < 0) {
			throw("Negatives not allowed: " + numbers);
		}
		else if(parseInt(numbers) > 1000) {
			return 0;
		}
		return parseInt(numbers);
	}

	var sizeArray = [];
	sizeArray = validateSize(numberArray);

	if(checkNegatives(sizeArray) == false) {
		return sum(sizeArray);	
	}
}

function validateSize(numberArray) {
	var sizeArray = [];
	j = 0;
	for(var i = 0; i < numberArray.length; i++) {
		if(parseInt(numberArray[i]) < 1000) {
			sizeArray[j] = numberArray[i];
			j++;
		}
	}
	return sizeArray;
}

function checkNegatives(sizeArray) {
	var negativeArray = [];
	j = 0;
	for(var i = 0; i < sizeArray.length; i++) {
		if(parseInt(sizeArray[i]) < 0 ) {
			negativeArray[j] = parseInt(sizeArray[i]);
			j++;
		}
	}
	if(negativeArray.length > 0) {
		throw("Negatives not allowed: " + negativeArray.map(Number));
		return true;
	}
	return false;
}

function sum(sizeArray) {

	var sum = 0;
	for(var i = 0; i < sizeArray.length; i++) {
		sum += parseInt(sizeArray[i]);
	}

	return sum;
}

module.exports = add;