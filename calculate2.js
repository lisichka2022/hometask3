'use strict'
let operand=prompt('Input operation(add, sub, mult, div)');
let numb1=+prompt('First number');
let numb2=+prompt('Second number');

if (operand === 'add') {
    add(numb1,numb2);
}
if (operand === 'sub') {
    sub(numb1,numb2);
}
if (operand === 'mult') {
    mult(numb1,numb2);
}
if (operand === 'div') {
    div(numb1,numb2);
}
 function  add(numb1,numb2) {
    let result=numb1+numb2;
    alert(`Результат: ${numb1} + ${numb2} = ${result}`);
   return result; }
    
    function  sub(numb1,numb2) {
        let result=numb1-numb2;
       return result; }
        alert(`Результат: ${numb1} - ${numb2} = ${result}`);
        function  mult(numb1,numb2) {
            let result=numb1*numb2;
            alert(`Результат: ${numb1} * ${numb2} = ${result}`);
    
           return result; }
            
            function  div(numb1,numb2) {
                let result=numb1/numb2;
                alert(`Результат: ${numb1} / ${numb2} = ${result}`);
               return result; }
                