/*
팰린드롬이란 뒤에서부터 읽어도 원래와 똑같은 문자열을 의미합니다.

예를 들어, abab는 팰린드롬 문자열이 아닙니다. 하지만 뒤에 a를 추가한다면 ababa가 되어 앞에서부터 읽을 때와 뒤에서부터 읽을 때가 똑같은 
팰린드롬 문자열이 되고, 이때 문자열의 길이는 5가 됩니다. 이처럼 문자열이 주어질 때, 
문자열의 뒤에 적절히 문자를 추가한다면 팰린드롬인 문자열로 만들 수 있습니다.
문자열이 주어질 때, 문자열의 뒤에 최소한의 문자를 추가해 팰린드롬 문자열로 만든 후, 만들어진 팰린드롬 문자열의 전체 길이를 return 하도록 solution 함수를 완성해주세요.

제한사항
문자열의 길이는 1,000 이하의 자연수입니다.
문자열은 모두 소문자로만 이루어져 있습니다.
1. 문자열 인덱스를 순회
2. 양옆으로 palindrome한 range를 작성
3. 나머지 문자를 작성
*/
function solution(plain) {
  let answer = plain.length;
  for (let i = 0; i < plain.length; i++) {
    let substring = plain.substring(i, plain.length);
    let reverstring = substring.split("").reverse().join("");

    if (substring == reverstring) {
      if (plain.length - substring.length < answer) {
        answer = plain.length - substring.length;
      }
    }
  }

  return answer + plain.length;
}

function isPalindrome(target) {
  for (let i = 0; i < target.length / 2; i++) {
    if (target[i] != target[target.length - 1 - i]) return false;
  }
  return true;
}

function solution(plain) {
  for (let i = 0; i < plain.length; i++) {
    if (plain[i] == plain[plain.length - 1]) {
      let substring = plain.substring(i, plain.length);
      if (isPalindrome(substring)) {
        console.log;
        return plain.length + i;
      }
    }
  }
  return plain.length * 2 - 1;
}

console.log(solution("abab"));
console.log(solution("abcde"));
console.log(solution("aaa"));
console.log(solution("aaa"));
console.log(solution("aba"));
