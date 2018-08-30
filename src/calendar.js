import currentDays from './currentDays';
import {stringToObject} from './time';

export default class Calendar{
	constructor(date, min = '1900-01-01', max = '2090-12-31'){
		this.date = date;
		this.min = min;
		this.max = max;
	}

	getDays(){
		return currentDays(this.date, this.min, this.max);
	}
}


