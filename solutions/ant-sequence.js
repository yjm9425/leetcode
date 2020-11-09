function lookAndSay(seq) {
  let arr = seq.split("");
  let prev = arr[0];
  let count = 0;
  let output = [];
  arr.forEach((s) => {
    if (s == prev) {
      count++;
    } else {
      output = [...output, prev, count];
      prev = s;
      count = 1;
    }
  });
  output = [...output, prev, count];
  return output.join("");
}

function solution(n) {
  let seq = "1";
  for (let i = 1; i < n; i++) {
    seq = lookAndSay(seq);
  }
  return seq;
}
