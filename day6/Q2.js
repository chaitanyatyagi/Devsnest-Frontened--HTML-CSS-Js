let arr1 = [1, 2, 4, 0];
let arr2 = [1, 2, [4, 0]];

function myfunction(x){
    let my_arr = []
    for(let i = 0; i < x.length; i++){
        my_arr[i] = x[i];
    }
    console.log(x);
}

myfunction(arr1);
myfunction(arr2);
