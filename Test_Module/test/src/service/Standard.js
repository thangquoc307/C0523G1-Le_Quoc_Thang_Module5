export const dateStandard = (date) => {
    let day = date.substring(8,10);
    let month = date.substring(5,7);
    let year = date.substring(0,4);
    return `${day}-${month}-${year}`
}
export const moneyStandard = (money) => {
    let result = "";
    money += "";
    let count = -1;
    for (let i = money.length - 1; i >= 0; i--){
        count++;
        if (count % 3 == 0 && count != 0){
            result = "," + result;
        }
        result = money[i] + result;
    }

    return result;

}