function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
function findMax(array) {
    return Math.max(...array);
}
function findMin(array) {
    return Math.min(...array);
}
function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
function filterArray(array, condition) {
    return array.filter(condition);
}
console.log(reverseString("hello")); 
console.log(countCharacters("hello world"));
console.log(capitalizeWords("hello world")); 
console.log("_________________________________________________")
const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers)); 
console.log(findMin(numbers)); 
console.log(sumArray(numbers)); 
console.log(filterArray(numbers, num => num > 3));