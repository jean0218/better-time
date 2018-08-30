
## simple-datetime-utils
处理日期时间、获取日历信息等。

## 安装使用
```js
npm install simple-datetime-utils
```
## 测试
```
npm test
```

## API
有两个方法Calendar和DateTime:
1. ### Calendar
    获取日历信息

    #### 基础用法
    ```js
    let date = '2018-08-30';
    let calendars = new Calendar(date);
    calendars.getDays(); // return []
    ```
    查看[返回回示例](https://github.com/jean0218/date-time-utils/blob/master/src/demo/currentDays.md)
    #### 限制日期范围
    ```js
    let date = '2018-08-30',
        min = '2018-08-01';
        max = '2019-09-31';
    let calendars = new Calendar(date, min, max);
    calendars.getDays(); // return []
    ```
    
    #### 参数说明
    | 参数 | 说明 | 类型 |默认值 |
    |---|---|---|---|
    |date | 根据传入的当前日期生成日历表单 | string | today |
    |min | 可选择的最小日期 | string | '1900-01-01' |
    |max | 可选择的最大日期 | string | '2090-12-31' |
    
    #### 方法说明
    | 参数 | 说明 | 返回 | 默认值 |
    |---|---|---|---|
    |getDays() | 获取当前月份数组 | array | null |
    

2. ### DateTime
    日期时间处理方法

    #### 示例用法
    ```js
    let date = '2018-08-30';
    let dateTimes = new DateTime(date);
    dateTimes.get(); // return ''
    ```
    
    #### 参数说明
    | 参数 | 说明 | 类型 |默认值 |
    |---|---|---|---|
    |date | 传入日期时间字符串 | string | today |
    
    #### 方法说明
    | 参数 | 说明 | 返回 | 默认值 |
    |---|---|---|---|
    |get() | 获取操作后的日期 | string | null |
    |nextMonth() | 获取下一月时间 | string | null |
    |toObject() | 时间字符串转对象 | object | null |
    
## Fetures
- jest √
- ES6 support √
