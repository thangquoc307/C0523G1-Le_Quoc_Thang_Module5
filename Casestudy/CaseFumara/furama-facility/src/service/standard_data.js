export const standardDay = (dateString) => {
    let year = dateString.substring(0, 4);
    let month = dateString.substring(5, 7);
    let day = dateString.substring(8, 10);

    return day + "/" + month + "/" + year;
}
export const standardPhone = (phoneString) => {
    if (phoneString.length == 10) {
        let num1 = phoneString.substring(0,4);
        let num2 = phoneString.substring(4,7);
        let num3 = phoneString.substring(7,10);
        return num1 + "." + num2 + "." + num3;
    }
}