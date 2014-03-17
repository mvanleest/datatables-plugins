/*!
 * EU Date/Time Sort function for the datatables plugin
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library (http://jquery.com) 
 * & DataTables jQuery Plugin (http://datatables.net)
 *
 * @source: https://github.com/mvanleest/datatables-plugins
 * @autor: Michael van Leest
 * @version: 1.0
 *
 */

function calculate_date(fulldate) {
	
	//Initial only date time objects like "17-04-2014 13:54:11"
 	console.log("fulldate: ");
 	console.log(fulldate);
	
	var dtArray = fulldate.split(" ");
		
	if(dtArray == ""){
		dtArray[0] = "00-00-0000";
		dtArray[1] = "00:00:00";
	}
	var eu_date = dtArray[0].split('-');
	var eu_time = dtArray[1].split(':');

	/*year (optional)*/
	if (eu_date[2]) {
		var year = eu_date[2];
	} else {
		var year = "0000";
	}

	/*month*/
	var month = eu_date[1];
	if (month.length == 1) {
		month = "0"+month;
	} else{
		month = "00";
	}

	/*day*/
	var day = eu_date[0];
	if (day.length == 1) {
		day = "0"+day;
	} else{
		day = "00";
	}

	/*hour*/
	var hour = eu_time[0];
	if(hour.length == 1){
		hour = "0"+hour;
	} else if(hour.length == 2){
		hour = hour;
	} else{
		hour = "00";
	}

	/*minute*/
	var minute = eu_time[1];
	if(minute.length == 1){
		minute = "0"+minute;
	} else if(minute.length == 2){
		minute = minute;
	} else{
		minute = "00";
	}

	/*second*/
	var second = eu_time[2];
	if(second.length == 1){
		second = "0"+second;
	} else if(second.length == 2){
		second = second;
	} else{
		second = "00";
	}


	return (year + month + day + hour + minute + second) * 1;
}

jQuery.fn.dataTableExt.oSort['eu_date_time-asc'] = function(a, b) {
	x = calculate_date(a);
	y = calculate_date(b);

	return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};

jQuery.fn.dataTableExt.oSort['eu_date_time-desc'] = function(a, b) {
	x = calculate_date(a);
	y = calculate_date(b);

	return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
};