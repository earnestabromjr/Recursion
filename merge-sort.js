function mergeSort(array) {
  if (array.length == 1) return array;
  const midpoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);
  for (let i = 0; i < firstHalf.length; i++) {
    for (let j = 0; j < secondHalf.length; j++) {
      if (firstHalf[i] < secondHalf[j]) {
        const temp = firstHalf[i];
        firstHalf[i] = secondHalf[j];
        secondHalf[j] = temp;
      }
    }
  }
  return mergeSort(firstHalf).concat(mergeSort(secondHalf));
}

let randomArray = [];
let seed = 10;

for (let i = 0; i < seed; i++) {
  randomArray[i] = Math.ceil(Math.random() * 10);
}
// console.log(mergeSort(randomArray));

const sortedArray = mergeSort([1, 5, 8, 0, 7]);
console.log(sortedArray);
