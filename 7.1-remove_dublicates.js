const removeDuplicatesValues = arr => {
    var arrReturn = [];
    for (var i = 0; i < arr.length; i++) {
        if (arrReturn.indexOf(arr[i]) === -1) {
            arrReturn.push(arr[i]);
        }
    }
    return arrReturn;
}

let arr1 = [3, 4, 4, 3, 6, 3];
arr2 = removeDuplicatesValues(arr1);
console.log(arr2);