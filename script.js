jquery $(document).ready(function(){
   // $('div').append('<p>bb</p>');
   $('#one').after('<p>T</p>');
    
})

$(document).ready(function(){
   // $('div').append('<p>bb</p>');
    $('#one').after('<p>T</p>');
    $('#two').after($("#one + p"));
    
})



$(document).ready(function() {
 $('div').click(function(){
    $(this).fadeOut('fast');
    
 });
 $('div').hover(function(){
    $(this).addClass('red');
 })
})

// Display input field and Add button. when user fill in Input field and click
// add button , Show display value bottom the Input Field

$(document).ready(function() {
  
$('#button').click(function(){
    var toAdd = $('input[name=checkListItem]').val();
    console.log(toAdd);
   // $div = $(<div class ='item>)
    $(".list").append("<div class ='item'>" + toAdd + "</div>");
});
});

//Outline color
$(document).ready(function(){
   $("input").focus(function () {
  $(this).css( "outline-color", "#FF0000");
});
})

// Keydown
$(document).ready(function(){
	// su dung document gi keydown ko tac dong len 1 element cu the
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'},500);
    })
})