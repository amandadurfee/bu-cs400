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
    let fibonacci = fibsGen();
    let fibRes = fibonacci.next();
    while (!fibRes.done) {
        if (fibRes.value % 2 == 0) {
            yield fibRes.value;
        }
        fibRes = fibonacci.next();
    }
}

const p1 = evenFibsGen();
let count = 6;
while (count --> 0) {
    console.log(p1.next().value);
}