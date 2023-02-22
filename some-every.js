function hasOddNumber(arr) {
	return arr.some((val) => arr.some((val) => val % 2 == 1));
}

function hasAZero(num) {
	return num.toString().split("").some((val) => val == "0");
}

function hasOnlyOddNumbers(arr) {
	return arr.every((val) => val % 2 == 1);
}

function hasNoDuplicates(arr) {
	let temp = [];
	return arr.every((val) => {
		if (temp.includes(val)) {
			return false;
		}
		temp.push(val);
		return true;
	});
}

function hasCertainKey(arr, key) {
	return arr.every((obj) => obj.hasOwnProperty(key));

}

function hasCertainValue(arr, key, searchValue) {
	return arr.every((obj) => obj[key] == searchValue
	);
}
