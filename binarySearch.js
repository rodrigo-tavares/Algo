function binarySearch(numArr, key) {
  const middleIndex = Math.floor(numArr.length / 2);
  const middleElm = numArray[middleIndex];
  const firstHalf = numArr.splice(0, numArr.length);
  const secondeHalf = numArr.splice(middleIndex, numArr.length);
  const isInTheFirstHalf = middleElm > key && numArray.length > 1;
  const isInSecondHalf = middleElm < key && numArray.length > 1;

  if (middleElm === key) return true;
  else if (isInTheFirstHalf) {
    return binarySearch(firstHalf, key);
  } else if (isInSecondHalf) {
    return binarySearch(secondeHalf, key);
  } else {
    return false;
  }
}
