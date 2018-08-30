import {isLeapYear, fillzero, stringToObject} from './time';
import {DateTime} from './dateTime';

export default function currentDays(date, min, max) { //生成日数组
    date = stringToObject(date);
    min = stringToObject(min);
    max = stringToObject(max);
    let daysArray = [];
    const minYMD = new Date(min.y, min.m, min.d),
        maxYMD = new Date(max.y, max.m, parseInt(max.d) - 1);
    // 定义一个包含十二个月在内的月份总天数的数组
    const days = new Array(31, 28 + isLeapYear(date.y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    let currentDay = parseInt(new Date(date.y, date.m, date.d).getDate()) - 1;
    
    let daysPart1 = supplement(0, new Date(date.y, date.m, 1).getDay());
    let daysPart2 = daysPart({
        className: '',
        type: 'current',
        startJ: 1,
        startI: 0,
        endI: days[date.m], //获取当前月有多少天;
        minYMD,
        maxYMD,
        date
    });
    daysArray = daysPart1.concat(daysPart2);

    currentDay = currentDay + daysPart1.length;
    if(daysArray[currentDay].value === new DateTime().get().substr(0, 10)){
        daysArray[currentDay].class = `${daysArray[currentDay].class} acitve`;
        daysArray[currentDay].text = '今天';
    }

    let daysPart3 = supplement(daysArray.length, 42);
    daysArray = daysArray.concat(daysPart3);
    return daysArray;
}



function daysPart({className, type, startJ, startI, endI, minYMD, maxYMD, date}) {
    let satshDay,
        thisDay = {},
        list = [],
        weekendNum = 0,
        weekendClass = '',
        disableClass = '';
    for (let i = startI, j = startJ, k = 0; i < endI; i++) {
        weekendClass = '';
        weekendNum = new Date(date.y, date.m, j).getDay();
        if(weekendNum === 0 || weekendNum === 6){
            weekendClass = ' weekend';
        };
        
        satshDay = new Date(date.y, date.m, i);
        if (satshDay >= minYMD && satshDay <= maxYMD) { //判断下一个月的日是否在限制区间内
            disableClass = '';
            thisDay.value = `${date.y}-${fillzero(date.m + 1)}-${fillzero(j)}`;
            thisDay.text = j;
        } else {
            disableClass = ' disable';
            thisDay.value = '';
            thisDay.text = '';
        }     
        thisDay.class = `day${className}${weekendClass}${disableClass}`
        list[k] = thisDay;
        thisDay = {};
        k++;
        j++;
    }
    return list;
}
        
function supplement(startI, endI) {
    let thisDay = {},
        list = [];
    for (let i = startI; i < endI; i++) {     
        thisDay.class = 'day disable';
        thisDay.value = '';
        thisDay.text = '';
        list.push(thisDay);
        thisDay = {};
    }
    return list;
}
