//6) გაქვთ მოცემული მასივი [4,2,7,3] და დაითვალეთ მათი ჯამი და გამოიტანე მაგ ფესვიდან კვადრატი sqrt.

let arr = [4,2,7,3] ;
let sum =0;

for ( let i = 0; i <arr.length; i++) {
    sum += arr[i]
}

sum = Math.sqrt(sum);
console.log(sum);
