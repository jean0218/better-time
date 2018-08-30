import {now, objectToString, stringToObject} from '../time';

describe('time file test', () => {
	it('function objectToString has param {y: 2018, m: 7, d: 30, w: 4, h: 10, i: 45, s: 27}', () =>{
		const times = { y: 2018, m: 7, d: 30, w: 4, h: 10, i: 45, s: 27 };
		expect(objectToString(times)).toBe('2018-08-30 10:45:27');
	});

	it('function objectToString has param {y: 2018, m: 7, d: 30}', () =>{
		const times = { y: 2018, m: 7, d: 30};
		expect(objectToString(times)).toBe('2018-08-30')
	});

	it('function objectToString has param {y: 2018, m: 7, d: 30, w: 4, h: 10, i: 45}', () =>{
		const times = { y: 2018, m: 7, d: 30, w: 4, h: 10, i: 45 };
		expect(objectToString(times)).toBe('2018-08-30 10:45');
	});

	it('function stringToObject 2018-07-30 10:45:27', () =>{
		const str = '2018-07-30 10:45:27';
		expect(stringToObject(str)).toEqual({ y: 2018, m: 6, d: 30, h: 10, i: 45, s: 27 });

	});
})

