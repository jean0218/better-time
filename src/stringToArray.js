//截取字符串生成年月日
export function stringToArray(str) {
    if(str.length === 0){
        return {};
    }
    
    var hour = parseInt(str.substr(11, 2)),
        minute = parseInt(str.substr(14, 2)),
        seconed = parseInt(str.substr(17, 2));
    var dateArray = {
        y: parseInt(str.substr(0, 4)),
        m: parseInt(str.substr(5, 2)) - 1,
        d: parseInt(str.substr(8, 2)),
        h: hour ? hour : 0,
        i: minute ? minute : 0,
        s: seconed ? seconed : 0
    };

    return dateArray;
}

//如果日期为一位数，则在前面补零
export function fillzero(str) {
    var str = typeof str == "string" ? str : str.toString();
    if (str.length == 1) {
        str = "0" + str;
    }
    return str;
}