const p1 = str => str.split('').sort().join('');

const p2 = expression => {
	const operator = expression.charAt(1);
	switch (operator) {
		case '+': return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
		case '%': return (expression) => Number(expression.charAt(0)) % Number(expression.charAt(2));
		case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
		case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
		case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
	}
}
console.log(`8*4: ${p2('8*4')('8*4')}`);

/* decorator */
const p3 = (str, fxn) => fxn(str);

/* stuffing an asterisk in the data because the splitter gets consumed */
const p31 = p3('supercalifragilisticexpialidocious', str => str.replace(/c/g, '*c').split('*'));
console.log(`${p31}`);
console.log(p31);

const p32 = str => {
	const stringData = {
		originalString: str,
		modifiedString: str.replace(/a/g, 'A'),
		numberReplaced: str.match(/a/g).length, // match will give a string of just lowercase as
		length: str.length,
	}
	return stringData;
};
console.log(p32('supercalifragilisticexpialidocious'));