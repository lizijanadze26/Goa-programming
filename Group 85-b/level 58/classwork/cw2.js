//2) დაწერეთ ფუნქცია სადაც რიცხვს აიყვანთ კვადრატში თუ იგი დადებითია და თუ უარყოფითი აიყვანეთ კუბში.
function check(num) {
    if (num > 0) {
        return num * num;
    } else if (num < 0) {
        return num * num * num;
    } else {
        return "Number is zero";
    }
}

console.log(check(5))