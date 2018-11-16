function bubbleSort(array) {
  for (let x = array.length; x > 0; x--) {
    for (let z = 0; z < x; z++) {
      if (array[z] > array[z + 1]) {
        const bigger = array[z];
        array[z] = array[z + 1];
        array[z + 1] = bigger;
      }
    }
  }

  return array;
}

console.log(bubbleSort([1, 5, 3, 3, 4, 5, 5, 9, 10, 102, -4]));
