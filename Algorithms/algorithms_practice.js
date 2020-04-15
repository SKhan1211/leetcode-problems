// Bubble Sort

function BubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      };
    };
  };

  return array;
}

// console.log(BubbleSort([4, 1, 3, 4, 6])); // => [1, 3, 4, 4, 6]

function selectionSort(array) {

};

console.log(selectionSort([1, 45, 6, 3, 5])); // => [1, 3, 5, 6, 45];