export default function currentMonths(date, min, max) {
    const minYMD = new Date(min.y, min.m, 1),
        maxYMD = new Date(max.y, max.m, 1);
    let monthsArray = {
        "class": [],
        "value": [],
        "text": []
    };
    for (let i = 0; i < 12; i++) {
        if (new Date(date.y, i, 1) >= minYMD && new Date(date.y, i, 1) <= maxYMD) {
            monthsArray.class[i] = "months";
        } else {
            monthsArray.class[i] = "months noaction";
        }
        monthsArray.value[i] = i;
    }
    monthsArray.class[date.m] = "months acitve";
    monthsArray.text = new Array('一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月');
    return monthsArray;
}