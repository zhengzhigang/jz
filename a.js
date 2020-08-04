a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15]

function binarySearch(arr, target) {
	var len = arr.length;
	var mid = Math.ceil(len / 2)

	if (target === arr[mid]) {
		return arr[mid]
	}
	if (target < arr[mid]) {
		let newArr = arr.slice(0, mid)
		return binarySearch(newArr, target)
	}
	if (target > arr[mid]) {
		let newArr = arr.slice(mid, len)
		return binarySearch(newArr, target)
	}
}
console.log(binarySearch(a, 8))