const evaluate = term =>
    { if (term.charAt(1) === '+') {return (left, right) => (parseInt(left) + parseInt(right))}
    else if (term.charAt(1) === '-') {return (left, right) => (parseInt(left) - parseInt(right))}
    else if (term.charAt(1) === '%') {return (left, right) => (parseInt(left) % parseInt(right))}
    else if (term.charAt(1) === '/') {return (left, right) => (parseInt(left) / parseInt(right))}
    else if (term.charAt(1) === '*') {return (left, right) => (parseInt(left) * parseInt(right))}
    //else (throw "Operation not supported");
    };

//const expressions = ['4+2', '5*7', '6-1', '9/2'];
let expression = '4+2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression.charAt((0)), expression.charAt(2))}`);

expression = '5*7';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression.charAt((0)), expression.charAt(2))}`);

expression = '6-1';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression.charAt((0)), expression.charAt(2))}`);

expression = '9/2';
operator = evaluate(expression);
console.log(`${expression} = ${operator(expression.charAt((0)), expression.charAt(2))}`);

// const operate = evaluate('4+2');
// console.log(`${operate('4', '2')}`);
// evaluate('5*7');
// evaluate('6-1');
// evaluate('9/2');

// const expr1 = '4+2';
// const expr2 = '5*7';
// const expr3 = '6-1';
// const expr4 = '9/2';
// const expressions = ['4+2', '5*7', '6-1', '9/2'];
// /* maybe this should be an array of strings */
//
// let result = evaluate(expression);
// let evaluate = term =>
//     { if (term.charAt(1) === '+') {(term.charAt(0) + term.charAt(2))}
//     else if (term.charAt(1) === '-') {(term.charAt(0) - term.charAt(2))}
//     else if (term.charAt(1) === '%') {(term.charAt(0) % term.charAt(2))}
//     else if (term.charAt(1) === '/') {(term.charAt(0) / term.charAt(2))}
//     };
// expressions.forEach(expr => console.log(expr, '=', ${evaluate(expr)}));