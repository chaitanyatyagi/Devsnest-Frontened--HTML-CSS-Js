function showresult(operator){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var r;
    var c = operator;
    switch(c){
        case '1':
            r = n1+n2;
            break;
        case '2':
            r = n1-n2;
            break;
        case '3':
            r = n1*n2;
            break;
        case '4':
            r = n1/n2;
            break;   
        case '5':
            r = 0;
            break;  
        default:
            break;       
    }
    document.getElementById('result').value=r;
}