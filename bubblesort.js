let ages = [21, 34, 18, 45, 27, 63, 19, 52, 31, 24, 70, 16, 39, 28, 55];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let sorted = sort(ages);
console.log(sorted);
