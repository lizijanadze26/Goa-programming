//7) გაქვს მოცემული მასივი [1,2,3,4,5,6,7,8,9,10,-5,-2,20,15,-20,7] თუ რიცხვი ნაკლებია 0-ზე მაშინ აიყვანეთ კვადრატში თუ მეტია ნულზე მაგრამ ნაკლებია 10 მაშინ აიყვანეთ კუბში სხვა შემთხვევაში 5 ხარისხში აიყვანეთ.
let arr = [1,2,3,4,5,6,7,8,9,10,-5,-2,20,15,-20,7];
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        result.push(Math.pow(arr[i], 2));
    } else if (arr[i] > 0 && arr[i] < 10) {
        result.push(Math.pow(arr[i], 3));
    } else {
        result.push(Math.pow(arr[i], 5));
    }
}
console.log(result);