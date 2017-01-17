$(document).ready(function() {
	/*팝업호출*/
	$('.popupOpen').on('click',function(){
		$('#popup').addClass('on');
	});
	$('.popExit').on('click',function(){
		$('#popup').removeClass('on');
	});
});