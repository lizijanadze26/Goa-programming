//3) hard - დაწერეთ ფუნქცია რომლის საშუალებით გამოიტანთ უდიდეს მნიშვნელობას ამ მასივიდან [1,2,10,-20,30,100,5].
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log()