let simpleNums = [];
for (let i = 2; i < 256; i++) {
    let isSimple = true;
    for (let j = 2; j < i; j++) if (i % j === 0) isSimple = false;
    if (isSimple) simpleNums.push(i)
}
console.log(simpleNums)
