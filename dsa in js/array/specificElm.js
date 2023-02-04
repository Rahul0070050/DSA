function deleteSpecificDuplicateElms(arr,item) {
	let len = arr.length;
	let found = false;
	let next = 0;
	
	for(let i = 0; i < len;++i) {
		if(found) {
			if(arr[i+next] == item) {
				--i;
				--len;
				++next;
				continue;
			} else {
				arr[i] = arr[i+next]
				continue;
			}
		}
		
		if(arr[i] == item) {
			--i;
			--len;
			++next;
			found = true;
			continue;
		}
	}
	for(let i = 0;i < len;++i) {
		console.log(arr[i]);
	}
}

deleteSpecificDuplicateElms([1,2,3,1,2,3],1);
console.log('\n');
deleteSpecificDuplicateElms([1,2,3,1,2,3],2);
console.log('\n')
deleteSpecificDuplicateElms([1,2,3,1,2,3],3);
