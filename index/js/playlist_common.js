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
 * 추천 관련 공통 스크립트
 */
function containsWord(haystack, needle) {
	return (" " + haystack + " ").indexOf(" " + needle + " ") !== -1;
}

function goTagsSearch(tagCode, tagName, logYn){
	var tags;
	if(logYn == 'Y'){
		// 태그 검색 로그
		insertTagSearchLog(tagCode);
	}
	
	if(tagCode.indexOf(",") != -1){
		var code;
		var name;
		code = tagCode.split(",");
		name = tagName.split(",");
		tags = code[0] + "||" + name[0] + "," + code[1] + "||" + name[1];
	}else{
		tags = tagCode + "||" + tagName;		
	}
	
	location.href="/playlist/tags?tags="+encodeURIComponent(tags);
	return;
}

/**
 * 태그 레이어
 */
function showTagSearchLayer(){
	FG_layerPopup.show($('#layer_tags'));
}

/**
 * 태그 선택
 * @param tagCode
 * @param tagName
 */
function selectTag(tagCode, tagName){

	var innerHtml  = "<a href=\"#\" class=\"tag\" id=\""+tagCode+"||"+tagName+"\" tagcode=\""+tagCode+"\" tagname=\""+tagName+"\"><span class=\"del\" onclick=\"javascript:deleteTag('"+tagCode+"', '"+tagName+"');\">"+tagName+"</span></a>";
	var defHtml = "<a href=\"#\" class=\"new\" id=\"0\">태그를 선택해주세요.</a>";

	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagcode") ==  tagCode){
			deleteTag(tagCode, tagName);
			chk =false;
		}
	});


	if($(".pop_mix_now > a > .del").size() == 2){
		alert('태그는 2개만 선택 가능합니다.');
		return;
	}
	var addCnt = 0;
	var chk = true;
	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagcode") ==  tagCode){
			chk = false;
		}
		var testTag = "SVC001 SVC002 SVC003"; //서비스 태그 제한 1개만 선택하도록 함.
		if(containsWord(testTag, $(this).attr("tagcode")) && containsWord(testTag, tagCode)){
			alert('서비스 분류의 태그는 중복 선택이 불가능합니다.');
			chk = false;
		}
	});

	if(chk){
		$(".pop_mix_now > a").each(function(index){
			if(addCnt == 0){
				if($(this).attr("tagcode") == "0" || $(this).attr("tagcode")== undefined){ //기본 인 경우에만 태그 넣음.
					if(index == 0 ){
						$(".pop_mix_now").prepend(innerHtml);
					}else{
						$(".pop_mix_now").append(innerHtml);
					}
					$(this).remove();
					$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).toggleClass("hover");
					$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).attr("onclick","javascript:deleteTag('"+tagCode+"', '"+tagName+"');return false;");

					addCnt ++;
				}
			}

		});
	}
}

function deleteTag(tagCode, tagName){
	var defHtml = "<a href=\"#\" class=\"new\" id=\"0\">태그를 선택해주세요.</a>";
	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagname") ==  tagName){
			if(index == 0){
				$(".pop_mix_now").prepend(defHtml);
			}else{
				$(".pop_mix_now").append(defHtml);
			}


			$(this).remove();
			$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).toggleClass("hover");
			$("#t_"+tagName.replace("/","\\/").replace("&", "\\&")).attr("onclick","javascript:selectTag('"+tagCode+"', '"+tagName+"');return false;");
		}
	});

}

/**
 * 레이어 태그 검색
 * @returns {boolean}
 */
function searchTagLayer(){
	var tagCode = "";
	var tagName = "";
	if($(".pop_mix_now > a > .del").size() ==0){
		alert("1개 이상의 태그를 선택해 주세요.");
		return false;
	}
	$(".pop_mix_now > a").each(function(index){
		if($(this).attr("tagcode") != '0' && $(this).attr("tagcode")){
			if($(".pop_mix_now > a > .del").size() == 2){
				if(index == 0){
					tagCode = tagCode + $(this).attr("tagcode") + ",";
					tagName = tagName + $(this).attr("tagname") + ",";
				}else{
					tagCode = tagCode + $(this).attr("tagcode");
					tagName = tagName + $(this).attr("tagname");
				}
			}else{
				tagCode = tagCode + $(this).attr("tagcode");
				tagName = tagName + $(this).attr("tagname");
			}
		}
	});
	goTagsSearch(tagCode, tagName, 'Y');
}

function delAndSearchTag(tagCode, tagName){
	var nowTag = $("#tags").val();
	var searchTag = "";
	var arr;
	var code;
	var name;

	if($("[id^='searchTag_']").size() ==1){
		location.href = "/playlist/tags";
		return false;
	}
	$("[id^='searchTag_']").each(function(index){
		searchTag = $(this).attr("id").replace("searchTag_","");
		arr = searchTag.split("||");
		
		if(arr[1] != tagName){
			code = arr[0];
			name = arr[1];
		}
	});

	goTagsSearch(code, name);
}

function goDetailView(plmSeq){

	location.href="/playlist/detailView?plmSeq="+plmSeq;
	return false;

}

function goMakerView(makerId, uno){

	if(makerId > 0){
		var zero="";
		var len = 4;
		for (i = 0; i < len - makerId.length; i++)
		zero += "0";
		
		var tagCode = "DJ" + zero + makerId;
		location.href = "/playlist/tags?tags="+tagCode;		//내부 DJ일 경우
	} else {
		location.href = "/myMusic?bgsq="+uno;	//일반 사용자일 경우
	}
	return false;

}

$('#btnLike').bind('click',function(){
	if (iSnsSeq == '0')
	{
		alert("잘못된 접근입니다.");
	}
	else
	{
		if(isOnceChk == '0')
		{
			like(sSnsType, iSnsSeq, iMemUno, fnLikeSuccess);
		}
		else
		{
			unlike(sSnsType, iSnsSeq, iMemUno, fnUnlikeSuccess);
		}
	}
	return false;
});


function recomToggleLike(that,isOnceChk, plmSeq, iMemUno){
	if (plmSeq == '0'){
		alert("잘못된 접근입니다.");
	}else{


		if(p_isOnceChk == '0'){
			like('PLAYLIST', plmSeq, iMemUno, fnLikeSuccess);
			$(that).closest('.btn-like').toggleClass('checked');
		}else{
			unlike('PLAYLIST', plmSeq, iMemUno, fnUnlikeSuccess);
		}

	}
}


var fnLikeSuccess = function(varResult){
	var resultCnt = "0";
	var tempResult = varResult.split('|');
	if (tempResult.length > 1)
	{
		resultCnt = varResult.split('|')[1];
	}
	resultCnt = commify(resultCnt);
	p_isOnceChk = "1";
	$('#emLikeCount').text(resultCnt);
	//fnUpdateLikeMemList();
};

var fnUnlikeSuccess = function(varResult){
	var resultCnt = "0";
	var tempResult = varResult.split('|');
	if (tempResult.length > 1)
	{
		resultCnt = varResult.split('|')[1];
	}
	resultCnt = commify(resultCnt);
	p_isOnceChk = "0";
	$('#emLikeCount').text(resultCnt);
	$('.btn-like').toggleClass('checked');
	//fnUpdateLikeMemList();
};

function commify(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
	n += '';						  // 숫자를 문자열로 변환

	while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');

	return n;
}

/**
 * 추천 곡 목록 조회 하기 (로깅)
 * @param plmSeq
 * @param fromType
 */
function allSongPlayNLog(plmSeq, playType, plmType){
	playType = playType || 1;
	plmType = plmType || 'Y';	// 추천선곡 여부 Y/N
	var strParams = {plmSeq : plmSeq, plmFlag : plmType};
	$.ajax({
		type:"POST",
		url:"/playlist/allSongList",
		async: true,
		cache: false,
		data:strParams,
		success : function(strResult){
			var result = strResult.Result;
			if(result.RetCode == 0 ){
				fnPlaySong(strResult.DataSet, playType);
				return false;

			}
		}
	});
}

/**
 * 추천  로그
 */
function insertPlaylistLog(plmSeq, logType, fromType){

	var strParams = {"seq" : plmSeq , "logtype" : logType, "fromtype": fromType};
	$.ajax({
		type:"POST",
		url:"/playlist/insertPlaylistLog",
		async: true,
		cache: false,
		data:strParams,
		success : function(data){
			var strResult =  data.retCode;
			if(strResult == 0 ){
				// alert(logType + " 로그 쌓기 성공!");
				// return false;

			}
		}
	});

}

/**
 * 추천 탭에서 상세 넘어갈때 로그 쌓은 후 이동처리.
 * @param plmSeq
 * @param logType
 * @param fromType
 * @returns {boolean}
 */
function playlistLogNDetailView(plmSeq, logType , fromType){

	insertPlaylistLog(plmSeq, logType, fromType);

	location.href="/playlist/detailView?plmSeq="+plmSeq;
	return false;

}

/**
 * 태그 검색 전 로그 쌓기
 * @param tags
 */
function insertTagSearchLog(tags){

	var strParams = {"tags" : tags};
	$.ajax({
		type:"POST",
		url:"/playlist/insertTagSearchLog",
		async: true,
		cache: false,
		data:strParams,
		success : function(data){
			var result = eval(data);
			if(result.retCode == 0 ){
				// alert(" 로그 쌓기 성공!");
				// return false;

			}
		}
	});

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
  captures_list: 192.658
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 141.252 (3)
  PetaboxLoader3.resolve: 158.191 (3)
  PetaboxLoader3.datanode: 91.12 (4)
  load_resource: 142.432
*/