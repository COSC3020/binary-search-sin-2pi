function binarySearch(list, element) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (list[mid] > element) {
      right = mid - 1;
    } else if (list[mid] < element) {
      left = mid + 1;
    } else {
      return element;
    }
  }
  return -1;
}