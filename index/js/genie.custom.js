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

/**
 * 기존 ASP에서 존재하지 않는 스크립트 추가
 */

/**
 * br문자열을 개행문자열로 치환<p>
 * @param str
 * @returns
 */
String.prototype.br = function() {
//	console.log(this);
//	console.log(this.replace(/<br\s*[\/]?>/gi, "\n"));
	return this.replace(/<br\s*[\/]?>/gi, "\n");
}

/**
 * 문자열 Null 체크<p>
 * @param str
 * @returns
 */
String.prototype.isEmpty = function() {
	if(this == null || this == "") {
		return true;
	}

	return false;
}

/**
 * 문자열 Null 체크<p>
 * @param str
 * @returns
 */
String.prototype.isNotEmpty = function() {
	if(this == null || this == "") {
		return false;
	}

	return true;
}

var StringUtils = {
		/**
		 * String 문자열을 boolean형으로 변환
		 * @param string
		 * @returns
		 */
		stringToBoolean : function(string) {
			try {
				switch(string.toLowerCase()){
					case "true": case "yes": case "1": return true;
					case "false": case "no": case "0": case null: return false;
					default: return Boolean(string);
				}
			} catch(err) {
				return false;
			}
		},

		/**
		 * 문자열 empty 체크
		 * @param val
		 * @returns {Boolean}
		 */
		isEmpty : function(val) {
			var undef, key, i, len;
			var emptyValues = [undef, null, false, 0, '', '0'];

			for (i = 0, len = emptyValues.length; i < len; i++) {
				if (val === emptyValues[i]) { return true; }
			}

			if (typeof val === 'object') {
				for (key in val) {
					// TODO: should we check for own properties only?
					//if (val.hasOwnProperty(key)) {
					return false;
					//}
				}
				return true;
			}

			return false;
		}
}

String.prototype.formatUnicorn = String.prototype.formatUnicorn || function() {
	"use strict";
	var str = this.toString();
	if (arguments.length) {
		var t = typeof arguments[0];
		var key;
		var args = ("string" === t || "number" === t) ? Array.prototype.slice.call(arguments) : arguments[0];

		for (key in args) {
			str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
		}
	}

	return str;
};


}
/*
     FILE ARCHIVED ON 11:35:54 Oct 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:23:58 Jul 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 147.51
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.064
  RedisCDXSource: 0.768
  esindex: 0.01
  LoadShardBlock: 115.508 (3)
  PetaboxLoader3.datanode: 93.221 (4)
  load_resource: 394.122
  PetaboxLoader3.resolve: 325.909
*/