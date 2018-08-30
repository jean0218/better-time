import currentDays from '../currentDays';

describe('date: currentDays', () =>{
	const date = '2018-08-30';
	const min = '1900-01-01';
	const max = '2090-12-31';

    it('currentDays 生成的20180816是否正确', () => {
        const days = [{
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day",
            "text": 1,
            "value": "2018-08-01"
        }, {
            "class": "day",
            "text": 2,
            "value": "2018-08-02"
        }, {
            "class": "day",
            "text": 3,
            "value": "2018-08-03"
        }, {
            "class": "day weekend",
            "text": 4,
            "value": "2018-08-04"
        }, {
            "class": "day weekend",
            "text": 5,
            "value": "2018-08-05"
        }, {
            "class": "day",
            "text": 6,
            "value": "2018-08-06"
        }, {
            "class": "day",
            "text": 7,
            "value": "2018-08-07"
        }, {
            "class": "day",
            "text": 8,
            "value": "2018-08-08"
        }, {
            "class": "day",
            "text": 9,
            "value": "2018-08-09"
        }, {
            "class": "day",
            "text": 10,
            "value": "2018-08-10"
        }, {
            "class": "day weekend",
            "text": 11,
            "value": "2018-08-11"
        }, {
            "class": "day weekend",
            "text": 12,
            "value": "2018-08-12"
        }, {
            "class": "day",
            "text": 13,
            "value": "2018-08-13"
        }, {
            "class": "day",
            "text": 14,
            "value": "2018-08-14"
        }, {
            "class": "day",
            "text": 15,
            "value": "2018-08-15"
        }, {
            "class": "day",
            "text": 16,
            "value": "2018-08-16"
        }, {
            "class": "day",
            "text": 17,
            "value": "2018-08-17"
        }, {
            "class": "day weekend",
            "text": 18,
            "value": "2018-08-18"
        }, {
            "class": "day weekend",
            "text": 19,
            "value": "2018-08-19"
        }, {
            "class": "day",
            "text": 20,
            "value": "2018-08-20"
        }, {
            "class": "day",
            "text": 21,
            "value": "2018-08-21"
        }, {
            "class": "day",
            "text": 22,
            "value": "2018-08-22"
        }, {
            "class": "day",
            "text": 23,
            "value": "2018-08-23"
        }, {
            "class": "day",
            "text": 24,
            "value": "2018-08-24"
        }, {
            "class": "day weekend",
            "text": 25,
            "value": "2018-08-25"
        }, {
            "class": "day weekend",
            "text": 26,
            "value": "2018-08-26"
        }, {
            "class": "day",
            "text": 27,
            "value": "2018-08-27"
        }, {
            "class": "day",
            "text": 28,
            "value": "2018-08-28"
        }, {
            "class": "day",
            "text": 29,
            "value": "2018-08-29"
        }, {
            "class": "day acitve",
            "text": "今天",
            "value": "2018-08-30"
        }, {
            "class": "day",
            "text": 31,
            "value": "2018-08-31"
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }, {
            "class": "day disable",
            "text": "",
            "value": ""
        }];
        expect(currentDays(date, min, max)).toEqual(days);
    })
})
