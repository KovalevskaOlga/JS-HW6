//task 1 
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}
//task 2
// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0){
//        continue 
//     }
//     console.log(i);
// }
//task 3
// const num = 7;
// for (let i = 1; i <= 10; i++) {
//     let result = number = i;
//     console.log(`${number} x  ${i} = ${result}`);
// }
//task 4 
// let miss = [1, 2, 3, 4, 5];
// let i = 0;
// while (i < miss.length) {
//     console.log(miss[i]);
//     i++;
// }
//task 5
// let mess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < mess.length; i++) {
//     if (i === 7) {
//         break;
//     }
//     console.log(mess[i]);
// }
//task 6
// let n = 20;
// for (let i = 0; i < 30; i++) {
//     if (i === n) {
//         break;
//     }
//     console.log(i);
// }
//task 7 
let i = 1;
while (i <= 20) {
    if (i % 3 === 0) {
        i++
        continue
    }
    console.log(i)
    i++
}