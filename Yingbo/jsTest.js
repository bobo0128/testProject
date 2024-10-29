const removeDuplicate = (inputArray) => {
    return inputArray.filter((element, index) => inputArray.indexOf(element) === index);
}


const arrayTest = [1,1,2,2,3,4,4];
console.log(removeDuplicate(arrayTest));