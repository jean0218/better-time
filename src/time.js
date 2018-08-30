export function now() {
    return objectToString( timeToObject(new Date()));
}

//时间转字符串
//* @param  {[type]} date
//* @return {[type]} string 
export function timeToString(date){
    return objectToString( timeToObject(new Date(date)));
}

//字符转时间对象
//* @param  {[type]} date
//* @return {[type]} object
//* test done
export function stringToObject(str) {
    let hour = parseInt(str.substr(11, 2)),
        minute = parseInt(str.substr(14, 2)),
        seconed = parseInt(str.substr(17, 2));
    let chooseTime = {
        y: parseInt(str.substr(0, 4)),
        m: parseInt(str.substr(5, 2)) - 1,
        d: parseInt(str.substr(8, 2)),
        h: hour ? hour : 0, //时
        i: minute ? minute : 0,
        s: seconed ? seconed : 0
    };
    return chooseTime;
}

//时间对象转字符
//* @param  {[type]} object
//* @return {[type]} str
//* test done
export function objectToString(time) {
    let ymd = `${time.y}-${fillzero(parseInt(time.m) + 1)}-${fillzero(time.d)}`;
    if(!time.h || time.h.length === 0){
        return ymd;
    }
    if(!time.s || time.s.length === 0){
        return `${ymd} ${fillzero(time.h)}:${fillzero(time.i)}`;
    }
    return `${ymd} ${fillzero(time.h)}:${fillzero(time.i)}:${fillzero(time.s)}`;
}

//定义一个包含十二个月在内的月份总天数的数组
//* @param  {[type]} array 
//* @return {[type]} array   
export function dayArray(date) {
    const dayArray = new Array(31, 28 + isLeap(date.y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
    return dayArray;
}

//判断润年
export function isLeapYear(year) {
    var res = year % 100 == 0 ? (year % 400 == 0 ? 1 : 0) : (year % 4 == 0 ? 1 : 0);
    return res;
}

//字符转时间戳
//* @param  {[type]} str 
//* @return {[type]} num    
export function timeStringToStamp(time) {
    var date = time.substring(0, 19);
    date = date.replace(/-/g, '/');
    console.log('new Date(date)',time , new Date(date))
    var timestamp = new Date(date).getTime();
    return timestamp;
}

//时间转对象
//* @param  {[type]} str 
//* @return {[type]} object    
export function timeToObject(str) {
    let timeObject = {
        y: str.getFullYear(),
        m: fillzero(str.getMonth()),
        d: fillzero(str.getDate()),
        h: fillzero(str.getHours()),
        i: fillzero(str.getMinutes()),
        s: fillzero(str.getSeconds()),
        w: str.getDay() // 周几
    };
    return timeObject;
}

/**
 * 如果日期为一位数，则在前面补零
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function fillzero(str) {
    var str = typeof str == "string" ? str : str.toString();
    if (str.length == 1) {
        str = "0" + str;
    }
    return str;
}
/**
 * 比较时间相差的天数
 * @param  {[type]} startDate [description]
 * @param  {[type]} endDate   [description]
 * @return {[type]}           [description]
 */
function compareTime(startDate, endDate) {
    let starttime = new Date(startDate);
    let endtime = new Date(endDate);
    let day = parseInt((starttime - endtime) / 86400000);
    if (day >= 0 && day <= 2) {
        return {
            result: true,
            day: day
        };
    }
    return {
        result: false,
        day: day
    };;
}