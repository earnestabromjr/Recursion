const fibRecursive = (n) => {
	if (n == 0) return [0];
	if (n == 1) return [0, 1];
	const seq = fibRecursive(n - 1);
	seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
	return seq;
};

const fib = (n) => {
	let nums = [];
	if (n <= 1) {
		nums.unshift(n);
		return nums;
	}
	let current = 1,
		prev = 0;
	for (let i = 2; i <= n; i++) {
		let next = prev + current;
		prev = current;
		current = next;
		nums.unshift(current);
	}
	return nums;
};

// console.log(fib(8));

console.log(fibRecursive(8));
