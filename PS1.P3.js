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

// V. 01
// const capitalA =
//     {
//         'originalString': superStr,
//         'modifiedString': appliedFunction(superStr, str => str.replace(/a/g, 'A')),
//         'numberReplaced': superStr.split('a').length - 1,
//         'length': superStr.length
//     };

// V. 02

// const capitalA = appliedFunction(appliedFunction(superStr, str => str.replace(/a/g, 'A')), str => { return
//     {
//     'originalString': superStr,
//     'modifiedString': str,
//     'numberReplaced': superStr.split('a').length - 1, //maybe a differences function
//     'length': superStr.length
//     }});
