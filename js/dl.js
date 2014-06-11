$(document).ready(function(){
 $('dd:not(:first)').hide();
 $('dt a').hover(function() {
 	$('dd:visible').slideUp('slow');
 	$(this).parent().next().slideDown('slow');
 	//return FALSE;
 })
});
