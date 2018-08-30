export default function currentYears(date, min, max) {
    let currentYear = date.y.toString(); //数字
    var beginYear = parseInt(currentYear.substring(0, 3) + 0); //截取年前三位，转换为数值型
    var endYear = beginYear + 9;
    var yearsArray = {
        "class": [],
        "value": [],
        "text": []
    };
    for (var i = 0, j = beginYear; j <= endYear; j++) {
        if (j >= min.y && j <= max.y) {
            yearsArray.class[i] = "years";
        } else {
            yearsArray.class[i] = "years noaction";
        }

        yearsArray.value[i] = j;
        yearsArray.text[i] = j;
        if (j == date.y) {
            yearsArray.class[i] = "years acitve";
        }
        i++;
    }
    if (parseInt(beginYear - 1) >= min.y) {
        yearsArray.class.unshift("years old");
    } else {
        yearsArray.class.unshift("years old noaction");
    }
    yearsArray.value.unshift(beginYear - 1);
    yearsArray.text.unshift(beginYear - 1);
    if (parseInt(endYear + 1) <= max.y) {
        yearsArray.class.push("years next");
    } else {
        yearsArray.class.push("years next noaction");
    }

    yearsArray.value.push(endYear + 1);
    yearsArray.text.push(endYear + 1);
    return yearsArray;
}