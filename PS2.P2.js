function* strGen(str) {
    let strList = str.split(' ');
    for (let word of strList) {
        yield word;
    }
}

for (const word of strGen("All I know is something like a bird within her sang")) {
    console.log(word);
}
