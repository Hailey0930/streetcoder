function contains1(array: number[], lookFor: number) {
  for (let n = 0; n < array.length; n++) {
    if (array[n] === lookFor) {
      return true;
    }
  }
  return false;
}

function contains2(array: number[], lookFor: number) {
  if (lookFor < 1) {
    return false;
  }

  for (let n = 0; n < array.length; n++) {
    if (array[n] === lookFor) {
      return true;
    }
  }
  return false;
}

// 이진 검색을 사용하여 정렬된 배열 검색하기
function contains3(array: number[], lookFor: number) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = start + (end - start) / 2;
    const value = array[middle];

    if (lookFor === value) {
      return true;
    }

    if (lookFor > value) {
      start = middle + 1; // 이 범위의 왼쪽 절반을 삭제한다
    } else {
      end = middle - 1; // 이 범위의 오른쪽 절반을 삭제한다.
    }
  }

  return false;
}
