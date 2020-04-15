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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      };
    };

    swap (arr, i, minIndex);
  };

  return arr;
};

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};  

// console.log(selectionSort([1, 45, 6, 3, 5])); // => [1, 3, 5, 6, 45]
// console.log(swap([3, 1], 0, 1)); // => [1, 3]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentEle = arr[i]; 

    for (var j = i - 1; j >= 0 && currentEle < arr[j]; j--) {
      arr[j + 1] = arr[j];
    };

    arr[j + 1] = currentEle;
  }

  return arr;
};

// console.log(insertionSort([1, 5, 2, 4, 6, 8])); // => [1, 2, 4, 5, 6, 8]

function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) next = array1.shift();
    else next = array2.shift();

    merged.push(next);
  }

  return merged;
};

function mergeSort(array) {

};

// console.log(mergeSort([1, 4, 3, 5, 7, 4, 2])); // => [1. 2. 3. 4. 4. 5. 7]
console.log(merge([3, 2, 6], [8, 4, 2])); // => [3, 2, 6, 8, 4, 2]