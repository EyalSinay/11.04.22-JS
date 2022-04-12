const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const lettersCounter = arr => {
    const newArr = arr.map(element => element.toLowerCase());
    const obj = {};
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if (newArr[i][j] === " ") {continue};
            if (!obj[newArr[i][j]]) {
                obj[newArr[i][j]] = 1;
            }
            else {
                obj[newArr[i][j]]++;
            }
        }
    }
    return obj;
}

const obj1 = lettersCounter(array);
console.log(obj1);


// extra
const obj1Val = Object.values(obj1);
const maxObj1Val = Math.max(...obj1Val);
console.log(maxObj1Val);