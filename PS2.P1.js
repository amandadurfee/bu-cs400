function* fibsGen() {
    let [init0, init1, result] = [0, 1, 0];
    while (true) {
        result = init0 + init1;
        init0 = init1;
        init1 = result;
        yield result;
    }
}

function* evenFibsGen() {
    const fibonacci = fibsGen();
    while (true) {
        let fib = fibonacci.next();
        if (fib.value % 2 == 0) {
            yield fib.value;
        }
    }
}

const p1 = evenFibsGen();
let count = 6;
while (count --> 0) {
    console.log(p1.next().value);
}