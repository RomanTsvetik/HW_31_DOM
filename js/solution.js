
//1) Выводим каждый ел-т с тeгом "li"
let elements = document.querySelectorAll('ul > li');

for (let elem of elements) {
    console.log(elem.innerHTML)
}

//2) Выводим общее количество эл-в с тeгом "li"
let totalElemNumber = document.getElementsByTagName('li');
console.log(`Общее количество эл-в с тегом li: ${totalElemNumber.length}`);

//3) Вытянуть текст из тегов li и записать текст содержащийся в 
//каждом элементе в массив — вывести этот массив в консоль

let array = [];

for (let elem of elements) {
    array.push(elem.innerHTML);
}
console.log(array);