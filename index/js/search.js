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

function fnInvalidchar(str){
	var retStr = true;
	var chars = /[~!\#$^&*\=+|:;?"<,.>'@\(\s]/g;
	var chkL = str.replace(chars, "").length;
	if (chkL == 0){
		retStr = false;
	}
	return retStr;
}

function fnGetSQString(q){
	if (navigator.userAgent.toLowerCase().indexOf("msie 6") != -1){
		for (sq=0; sq<100; sq++){
			try{
				if (q.indexOf(" ") != -1){
					q = q.replace(" ","|||");
				}else{break;}	
			}catch(e){break;}
		}
	}
	try{
		q = q.replace( /[\"]/g," ");
	}catch(e){};
	q = encodeURIComponent(q);
	return q;
}

function fnGoSearch(varForm)
{
	var searchQuery = $.trim($('#sc-fd').val());
	var searchType = $('#hdSearchType').val();
	var searchID = $('#hdSearchID').val();

	if(searchQuery.length < 1)
	{
		alert ("검색어를 입력해주세요.");
		$("#sc-fd").val("");
		$("#sc-fd").focus();
		return false;
	}
	if (!fnInvalidchar(searchQuery)) 
	{
		alert ("검색어에 올바르지 않은 문자가 있습니다.");
		$("#sc-fd").val("");
		$("#sc-fd").focus();
		return false;
	}

    var autoSearch = new AUTO_SEARCH();
    // autoSearch.hook = $('#sc-fd');
    // hot keyword case
    if(searchType != "hot") {
        autoSearch._saveRecent($("#sc-fd").val());
    }

	var _searchQuery = fnGetSQString(searchQuery);
	switch(searchType)
	{
		case "artist" :
			fnViewArtist(searchID);
			break;
		case "song" :
			fnViewSongInfo(searchID);
			break;
		case "album" :
			fnViewAlbumLayer(searchID);
			break;
		case "hot" :
			document.location.href = searchID;
			break;
		default : 
			$('#hdQuery').val(_searchQuery);
			$('#loggable').val('true');

			varForm.submit();
			break;
	}
	return false;
}

}
/*
     FILE ARCHIVED ON 11:35:54 Oct 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:18:44 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 760.812
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.056
  esindex: 0.009
  LoadShardBlock: 677.529 (3)
  PetaboxLoader3.datanode: 139.542 (4)
  PetaboxLoader3.resolve: 172.082 (2)
  load_resource: 64.54
*/