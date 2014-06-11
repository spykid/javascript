
$(document).ready(function()
{

$('#signup').click(function()
{
//document.getElementById('password').value='';

$('#login_block').hide();
$('#signup_block').show();

});

$('#login').click(function()
{
//document.getElementById('newpassword').value='';
$('#signup_block').hide();
$('#login_block').show();

});




$.validator.addMethod("email", function(value, element)
{
return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
}, "Please enter a valid email address.");


// Validate signup form
$("#form").validate({
rules: {
email: "required email",

},
});





});