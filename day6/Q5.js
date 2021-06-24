var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1.sort();
console.log(arr1);
var curr_f = 1
var ans = arr1[0]
var max_f = 1

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] == arr1[i - 1]) {
        curr_f++
    }
    else {
        if (curr_f > max_f) {
            max_f = curr_f
            ans = arr1[i - 1]
        }
        curr_f = 1
    }
}
if (curr_f > max_f) {
    ans = arr1[arr1.length - 1]
    max_f = curr_f
}
console.log(ans, '(', max_f, 'times', ')');