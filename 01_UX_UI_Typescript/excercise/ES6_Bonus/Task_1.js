let intArray = (a, b) => {
    let resultArr = [];
    for (let i = a; i <= b; i++){
        resultArr.push(i);
    }
    return resultArr;
};
let checkPrime = ele => {
    if (ele < 2) return false;
    for (let i = 2; i <= Math.sqrt(ele); i++){
        if (ele % i == 0){
            return false;
        }
    }
    return true;
}

let array = intArray(0,100);


let primeArray = array.filter(ele => checkPrime(ele));
console.log(primeArray);