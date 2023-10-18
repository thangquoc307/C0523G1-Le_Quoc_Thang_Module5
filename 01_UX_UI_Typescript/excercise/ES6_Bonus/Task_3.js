let sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
let sv2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
const getInfo = ele => {
    const {firstName, degree, ...rest} = ele;
    return {
        firstName: firstName || "Quân",
        degree: degree || "N/A",
            ...rest
    }
}

console.log(getInfo(sv1));
console.log(getInfo(sv2));