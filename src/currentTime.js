export default function currentTime() {
    const formatValue = new Date();
    var chooseTime = {
        y: formatValue.getFullYear(),
        m: formatValue.getMonth(),
        d: formatValue.getDate(),
        w: formatValue.getDay(),
        h: formatValue.getHours(),
        i: formatValue.getMinutes(),
        s: formatValue.getSeconds()
    };
    return chooseTime;
}