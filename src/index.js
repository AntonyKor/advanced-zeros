module.exports = function getZerosCount(number, base) {
    let countNs = function (number, n) {
        let logn = Math.floor(Math.log(number) / Math.log(n)), ns = 0;

        for (let j = 1; j <= logn; j++) ns += Math.floor(number / Math.pow(n, j));
        return ns;
    };

    let simpleNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,  211, 223, 227, 229, 233, 239, 241, 251];

    let devidersOfNumber = [], counter = 0;
    while (base > simpleNums[counter]) {
        let tempNum = base, quantity = 0;
        while (tempNum > 1)
            if (tempNum % simpleNums[counter] === 0) {
                tempNum /= simpleNums[counter];
                quantity++;
            } else tempNum = 0;
        if (quantity) devidersOfNumber.push([simpleNums[counter],quantity]);
        counter++
    }
    if (devidersOfNumber.length === 0) devidersOfNumber.push([simpleNums[counter],1]);

    for (let i = 0; i < devidersOfNumber.length; i++) devidersOfNumber[i][2] = countNs(number, devidersOfNumber[i][0]);

    let min = Math.floor(devidersOfNumber[0][2]/devidersOfNumber[0][1]);
    for (let i = 0; i < devidersOfNumber.length; i++) min = (min - Math.floor(devidersOfNumber[i][2]/devidersOfNumber[i][1])) ? Math.floor(devidersOfNumber[i][2]/devidersOfNumber[i][1]) : min;

    return min
}