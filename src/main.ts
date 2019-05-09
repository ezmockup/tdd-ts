export const GCD = (a: number, b: number): any => {
  // if no refractor
  if (!a || !b) return a + b;
  let allDivisorsOfa: Array<number> = [];
  for (let i: number = 0; i <= a; i += 1) {
    if (a % i === 0) allDivisorsOfa.push(i);
  }

  // find all divisors of b
  let allDivisorsOfb = [];
  for (let i: number = 0; i <= b; i += 1) {
    if (b % i === 0) allDivisorsOfb.push(i);
  }

  let allDivisorsOfCommon = [
    ...allDivisorsOfb.filter(v => -~allDivisorsOfa.indexOf(v))
  ];

  // for (let i: number = 0; i < allDivisorsOfa.length - 1; i += 1) {
  //   console.log(allDivisorsOfa[i],222)
  //   for (let j: number = 0; allDivisorsOfb.length - 1; j += 1) {
  //     console.log(allDivisorsOfb[j])
  //     // if (allDivisorsOfa[i] === allDivisorsOfb[j]) {
  //     //   allDivisorsOfCommon.push(allDivisorsOfa[i])
  //     // }
  //   }
  // }

  return allDivisorsOfCommon.pop();
};

export const GCDRefactor: any = (a: number, b: number) =>
  b ? GCDRefactor(b, a % b) : Math.abs(a);
