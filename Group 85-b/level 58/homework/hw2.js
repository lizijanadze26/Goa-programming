//2) დაწერეთ ფუნქცია სადაც გაიგებთ უმცირეს რიცხვს ამ მასივიდან [2,10,-20,100,90,50,40].
function findmin(arr) {
    let min = arr[0];
    for (let i= 1; i<arr.length ; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    } return min;
}
