function JoinNames1(names: string[]) {
  // 문자열을 초기화하지 않는다면 기본값 null을 가질 것이다.
  // 그대로 이용한다면 null 검사에 의해 예외가 발생할 수 있다.
  let result = "";
  const lastIndex = names.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    result += names[lastIndex];
    return result;
  }
}

function JoinNames2(names: string) {
  let builder: string[] = [];
  const lastIndex = names.length - 1;

  for (let i = 0; i < lastIndex; i++) {
    builder.push(names[i]);
    builder.push(", ");
  }
  builder.push(names[lastIndex]);
  return builder.join("");
}
