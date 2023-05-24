var lengthInput = prompt("Введите длину массива:");
var length = parseInt(lengthInput);

if (!isNaN(length)) {
    var myArray = [];

    for (var i = 0; i < length; i++) {
        var elementInput = prompt("Введите элемент " + (i + 1) + " массива:");
        var element = parseFloat(elementInput);
        myArray.push(element);
    }

    myArray.sort(function(a, b) {
        return a - b;
    });
    myArray.splice(1, 3);

    console.log(myArray.length);
    console.log(myArray);
} else {
    console.log("Некорректный ввод. Пожалуйста, введите число.");
}