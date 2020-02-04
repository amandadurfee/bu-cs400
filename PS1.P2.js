const evaluate = term => {
    switch (term.charAt(1)) {
        case '+': return (left, right) => (parseInt(left) + parseInt(right));
        case '-': return (left, right) => (parseInt(left) - parseInt(right));
        case '%': return (left, right) => (parseInt(left) % parseInt(right));
        case '/': return (left, right) => (parseInt(left) / parseInt(right));
        case '*': return (left, right) => (parseInt(left) * parseInt(right));
    //else (throw "Operation not supported");
    }
};

// const expressions = ['4+2', '5*7', '6-1', '9/2'];
// const evals = expressions.map(expr => evaluate(expr));
// and then apply each expression to the list of resulting functions

/* evaluate expression brings back a function that takes two arguments that we then pass it */
let expression = '4+2';
console.log(`${expression} = ${evaluate(expression)(expression.charAt((0)), expression.charAt(2))}`);

expression = '5*7';
console.log(`${expression} = ${evaluate(expression)(expression.charAt((0)), expression.charAt(2))}`);

expression = '6-1';
console.log(`${expression} = ${evaluate(expression)(expression.charAt((0)), expression.charAt(2))}`);

expression = '9/2';
console.log(`${expression} = ${evaluate(expression)(expression.charAt((0)), expression.charAt(2))}`);

