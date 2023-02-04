function insertAnElmInAPosition(arr,position,value) {
	let newArr = [];
	let index = 0;
	for(let i = 0; i < arr.length+1; ++i) {
		if(i+1 == position) {
			newArr[i] = value;
		} else {
			newArr[i] = arr[index];
			++index;
		}
	}
	for(let i = 0;i < newArr.length; ++i) {
		console.log(newArr[i]);
	}
}

insertAnElmInAPosition([1,3,4],1,2);