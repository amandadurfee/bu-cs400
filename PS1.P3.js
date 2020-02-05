const appliedFunction = (str, fxn) => fxn(str);

const superStr = 'supercalifragilisticexpialidocious';
const splitOnC = appliedFunction(superStr, str => str.split(/(?=c)/));
console.log(splitOnC);

const capitalA = appliedFunction(superStr, str => { return {
    'originalString': str,
    'modifiedString': str.replace(/a/g, 'A'),
    'numberReplaced': str.split('a').length - 1, //maybe a differences function
    'length': str.length
    }});
console.log(capitalA);
