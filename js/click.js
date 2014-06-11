$(document).ready((function(){
	$('.button').on('click',function() {
		var count = $('#count').val();
		console.log('444');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		 window.open($("#link").attr('href'),'_blank');
		         
		//active(count);

	});
	var active = function(count) {
		for (i=0; i<= count; i++) {
			console.log(i);
			$("a").click();
	        window.open($("#link").attr('href'),'_blank')
	};
	};
}));


