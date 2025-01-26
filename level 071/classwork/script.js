// let x1 = true;
// let x2 = false;
// let y1 = 6 > 10;
// let y2 = 8 < 9;
// let z1 = 3 === 3;
// let z2 = 5 !== 5;
// let a1 = true;
// let a2 = 1 === 1;
// let b1 = false;
// let b2 = 4 >= 3;
// let c1 = true;
// let c2 = 2 < 5;
// let d1 = false;
// let d2 = 7 <= 2;
// let e1 = true;
// let e2 = 10 === 10;
// let f1 = false;
// let f2 = 12 > 20;
// let g1 = true;
// let g2 = 0 === 0;
// let h1 = false;
// let h2 = 8 != 8;
// let i1 = true;
// let i2 = 3 > 1;
// let j1 = false;
// let j2 = 5 < 2;
// let k1 = true;
// let k2 = 2 === 2;
// let l1 = false;
// let l2 = 9 >= 10;

// const bools = [
//     [x1, y1],
//     [x2, y2],
//     [z1, z2],
//     [a1, a2],
//     [b1, b2],
//     [c1, c2],
//     [d1, d2],
//     [e1, e2],
//     [f1, f2],
//     [g1, g2],
//     [h1, h2],
//     [i1, i2],
//     [j1, j2],
//     [k1, k2],
//     [l1, l2],
// ];

// for (let index = 0; index < bools.length; index++) {
//     const a = bools[index][0];
//     const b = bools[index][1];
//     const andResult = a && b;
//     const orResult = a || b;
//     console.log(`Pair ${index + 1}: ${a} AND ${b} -> AND: ${andResult}, OR: ${orResult}`);
// }

//2) შექმენით ათი წყვილი ცვლადი და და თითოს მიანიჭეთ "მოსწორო" და "მოარასწორო" მნიშვენლობა. შემდეგ ლოგიკური ოპერატორების გამოყენებით გამოიტანეთ შესაბამისი მნიშვნელობა
const pairs = [
    { A: true, B: false },
    { C: true, D: true },
    { E: false, F: false },
    { G: true, H: false },
    { I: false, J: true },
    { K: true, L: true },
    { M: false, N: true },
    { O: true, P: false },
    { Q: false, R: false },
    { S: true, T: true }
];

const results = pairs.map(pair => {
    const keys = Object.keys(pair);
    const a = pair[keys[0]];
    const b = pair[keys[1]];
    
    return {
        AND: a && b,
        OR: a || b
    };
});

results.forEach((result, index) => {
    console.log(`Pair ${index + 1}: AND = ${result.AND}, OR = ${result.OR}`);
});
