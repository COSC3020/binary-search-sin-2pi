function binarySearch(list, element) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (list[mid] === element) {
      while (mid > 0 && list[mid - 1] === element) {
        mid--;
      }
      return mid;
    }
    if (list[mid] > element) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

let element = 4;
let list = [4, 4, 4, 4];

console.log(binarySearch(list, element));
