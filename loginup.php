<?php

if($_POST)
{
$email = $_POST['email'];
$password = $_POST['password'];
$newpassword = $_POST['newpassword'];

if($_POST['password'] && $_POST['email'])
{

echo "Login success";
}
else if($_POST['newpassword'] && $_POST['email'])
{
echo "Registration Success";
}


}

?>