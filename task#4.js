let myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; // Заданный массив

let sum = 0;
let positiveCount = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];

    if (myArray[i] > 0) {
        positiveCount++;
    }
}

let maxNumber = Math.max.apply(null, myArray);
let idxMax = myArray.indexOf(maxNumber);

let minNumber = Math.min.apply(null, myArray);
let idxMin = myArray.indexOf(minNumber);

let negativeCount = 0;
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] < 0) {
        negativeCount++;
    }
}

let oddPositiveCount = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
        oddPositiveCount++;
    }
}

let evenPositiveCount = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 === 0) {
        evenPositiveCount++;
    }
}

let sumEven = 0;
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 === 0) {
        sumEven += myArray[i];
    }
}

let sumOdd = 0;
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
        sumOdd += myArray[i];
    }
}

let multiply = 1;
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0) {
        multiply *= myArray[i];
    }
}

let maxElement = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
    }
}

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== maxElement) {
        myArray[i] = 0;
    }
}

console.log(maxNumber);
console.log("Сумма элементов: " + sum);
console.log("Количество положительных элементов: " + positiveCount);
console.log("Максимальный элемент массива: " + maxNumber);
console.log("Порядковый номер Максимального элемента массива: " + idxMax);
console.log("Минимальный элемент массива: " + minNumber);
console.log("Порядковый номер минимального элемента массива: " + idxMin);
console.log("Количество отрицательных элементов: " + negativeCount);
console.log("Количество положительных нечетных элементов: " + oddPositiveCount);
console.log("Количество положительных четных элементов: " + evenPositiveCount);
console.log("Сумма положительных четных элементов: " + sumEven)
console.log("Сумма положительных нечетных элементов: " + sumOdd)
console.log("Произведение положительных элементов: " + multiply);
console.log("Наибольший элемент: " + maxElement);
console.log("Массив после обнуления: " + myArray);