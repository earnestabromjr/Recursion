function mergeSort(array) {
	if (array.length == 1) return array;
	const midpoint = Math.ceil(array.length / 2);
	const firstHalf = array.slice(0, midpoint);
	const secondHalf = array.slice(midpoint);
}

mergeSort([1, 5, 8, 0, 7]);
