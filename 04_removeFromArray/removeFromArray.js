const removeFromArray = function(arr, ...args) {
    let arrCopy = arr.slice();
    for (let arg of args) {
        let i = arrCopy.indexOf(arg);
        if (i != -1) {
            arrCopy.splice(i, 1);
        }
    }

    return arrCopy;
}
// Do not edit below this line
module.exports = removeFromArray;