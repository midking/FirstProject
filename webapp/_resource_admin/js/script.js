function linkTopUrl(url, upperMenu, menu){
	$("#loading").show();
	$("#upperMenu").val(upperMenu);
	$("#menu").val(menu);
	$("#topMenuVO").attr("action",url);
	$("#topMenuVO").submit();
}