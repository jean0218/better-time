import currentDays from './currentDays';
import {now, stringToObject, objectToString} from './time';
import Calendar from './calendar';
import {stringToArray} from './stringToArray';

class DateTime{
	constructor(date){// date string
		if(!date){
			date = now();
		}
		this.date = date;
	}

	get(){
		return this.date;
	}

	nextMonth(){
		let timeObj = Object.assign({}, stringToObject(this.date));
		timeObj.m += 1;
		if (timeObj.m > 11) {
			timeObj.m = 0;
			timeObj.y += 1;
		};
		
		this.date = objectToString(timeObj);
		return this.date;
	}

	toObject(){
		return stringToObject(this.date);
	}

}

export{
	Calendar,
	DateTime
}
