function  add(x, y){
    return x+y;
}
function substract(x, y){
    return x-y;

}
function multiply(x, y){
    return x*y;
}
function divide(x, y){
    return x/y
}


function simpleCalculator(num1, num2, operator){
    let result;

    switch (operator){
        case '+':
            result = add(num1, num2);
            operationName = 'Penjumlahan';
            break;
        case '-':
            result = substract(num1, num2);
            operationName = 'Pengurangan';
            break;
        case '*':
            result = multiply(num1, num2);
            operationName = 'Perkalian';
            break;
        case '/':
            result = divide(num1, num2);
            operationName = 'Pembagian';
            break; 
        default:
            result = 'Operator tidak valid' ;
            operationName = 'Tidak ada operasi yang dijalankan';
    }

    console.log(`Operasi: ${operationName}`);
    console.log(`Angka 1: ${num1}`);
    console.log(`Angka 2: ${num2}`);
    console.log(`Hasil: ${result}`);
}


const inputs = ['10', '3', '+']
const input1 = parseFloat(inputs[0]);
const input2 = parseFloat(inputs[1]);
const operator = inputs[2];
simpleCalculator(input1, input2, operator);