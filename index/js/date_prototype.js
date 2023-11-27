var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//Date -> YYYY.MM.DD 형태 String으로 리턴
Date.prototype.toY4MDString = function(delim) {
	if (delim == undefined) delim = "";
	var year = this.getFullYear().toString();
	var month = this.getMonth() + 1;
	var day = this.getDate();
	month = (month < 10 ? "0" : "") + month;
	day = (day < 10 ? "0" : "") + day;
	return year + delim + month + delim + day;
}

//1년 중 몇번째 주인지 리턴
Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

//dateadd 함수
Date.prototype.dateadd = function(part, amount){
	part = part.toLowerCase();

	var map = {
				years: 'FullYear', months: 'Month', weeks: 'Hours', days: 'Hours', hours: 'Hours',
				minutes: 'Minutes', seconds: 'Seconds', milliseconds: 'Milliseconds',
				utcyears: 'UTCFullYear', utcmonths: 'UTCMonth', weeks: 'UTCHours', utcdays: 'UTCHours',
				utchours: 'UTCHours', utcminutes: 'UTCMinutes', utcseconds: 'UTCSeconds', utcmilliseconds: 'UTCMilliseconds'
			},
		mapPart = map[part];

	if(part == 'weeks' || part == 'utcweeks')
		amount *= 168;
	if(part == 'days' || part == 'utcdays')
		amount *= 24;

	this['set'+ mapPart]( this['get'+ mapPart]() + amount );

	return this;
}

//요일(숫자형태로) 구해오는 함수 1:월~7:일
Date.prototype.getDayOfWeekNum = function() {
	var day   = this.getDay();
	return (day == 0 ? 7 : day);
};

//날짜를 YYYY-MM-DD HH:MM:SS 형태로 리턴
Date.prototype.formatDate = function(frt) {
	var y = this.getFullYear().toString(),
		m = (this.getMonth() + 1).toString(),
		d = this.getDate().toString(),
		h = this.getHours().toString(),
		mm = this.getMinutes().toString(),
		s = this.getSeconds().toString();

	switch(frt) {
		case "YYYYMMDDHHMMSS" : return y + (m.length == 1 ? "0" + m : m) +  (d.length == 1 ? "0" + d : d) + (h.length == 1 ? "0" + h : h) + (mm.length == 1 ? "0" + mm : mm) + (s.length == 1 ? "0" + s : s); break;

		case "HHMMSS" : return (h.length == 1 ? "0" + h : h) + (mm.length == 1 ? "0" + mm : mm) + (s.length == 1 ? "0" + s : s); break;

		default : return y + "-" + (m.length == 1 ? "0" + m : m) + "-" +  (d.length == 1 ? "0" + d : d) + " " + (h.length == 1 ? "0" + h : h) + ":" + (mm.length == 1 ? "0" + mm : mm) + ":" + (s.length == 1 ? "0" + s : s);
	}
};

//YYYYMMDD String -> YYYY/MM/DD 등의 delimeter 삽입하여 리턴
String.prototype.toDateStr = function(delim) {
	if (delim == undefined) delim = "";
	return (this.substr(0, 4) + delim + this.substr(4, 2) + delim + this.substr(6, 2));
};

String.prototype.toDate = function() {
	var y = this.substr(0, 4),
		m = parseInt(this.substr(4, 2), 10) - 1,
		d = this.substr(6, 2);

	return new Date(y, m, d);
};

}
/*
     FILE ARCHIVED ON 11:35:54 Oct 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:24:24 Jul 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 287.544
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.073
  cdx.remote: 0.068
  esindex: 0.012
  LoadShardBlock: 249.899 (3)
  PetaboxLoader3.datanode: 137.578 (4)
  PetaboxLoader3.resolve: 276.65 (2)
  load_resource: 198.187
*/