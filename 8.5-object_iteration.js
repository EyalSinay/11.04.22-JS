const swapObj = obj => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        newObj[obj[key]] = key;
    });
    return newObj;
}

const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(swapObj(myObj));