// 1.  Сколько раз каждый элемент встречается в массиве.
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const sumFruits = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  return obj;
};
console.log(sumFruits(fruits));

// 2.  Создать массив который содержит только уникальные значения.
const uniqueFruits = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }

  return Object.keys(obj);
};
console.log(uniqueFruits(fruits));
