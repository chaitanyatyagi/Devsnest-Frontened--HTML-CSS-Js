function first(arr,n=0.1){
    if(n>0 && n<arr.length){
        let x = [];
        for(let i = 0; i < n; i++){
            x[i] = arr[i];
        }
        return x;
    }
    else if(n >= arr.length){
        return arr;
    }
    else if(n <= 0){
        return [];
    }
    if(n = 0.1){
        let y = arr[0];
        let res = y.toString();
        return res*"1";
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3))
