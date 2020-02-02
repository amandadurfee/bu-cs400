const appliedFunction = (str, fxn) => {return fxn(str)};

const superStr = 'supercalifragilisticexpialidocious';
const splitOnC = appliedFunction(superStr, str => str.split(/(?=c)/));
console.log(splitOnC);

const capitalA = appliedFunction(superStr, str => str.replace(/a/g, 'A'));
console.log(capitalA);