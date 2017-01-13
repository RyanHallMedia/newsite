<?
$fname=(isset($_REQUEST['fname']))?$_REQUEST['fname']:"";
$lname=(isset($_REQUEST['lname']))?$_REQUEST['lname']:"";
$phone=(isset($_REQUEST['phone']))?$_REQUEST['phone']:"";
$email=(isset($_REQUEST['email']))?$_REQUEST['email']:"";
$message=(isset($_REQUEST['message']))?$_REQUEST['message']:"";

// --------------------------------------
//   BEGIN EDITABLE AREA
// --------------------------------------

$to="ryan@ryanhallmedia.com"; // This is the recipient's email address, where the user's message will be sent.
$redir="success.html"; // This is the page the user is redirected to upon submitting the form.

// --------------------------------------
//   END EDITABLE AREA
// --------------------------------------

// Below is the subject and body of the comment e-mail you will receive:

$from="From: $email";
$subject="Online Message from ".$fname." ".$lname;
$body="Hey,\n\nSomebody sent you a message:\n\n";
$body.="First Name: ".$fname."\n";
$body.="Last Name: ".$lname."\n";
$body.="Phone: ".$phone."\n";
$body.="E-mail: ".$email."\n\n";
$body.="Message:\n\n".$message."\n";

$body = wordwrap($body, 70);
mail($to, $subject, $body, $from);
header( "Location: $redir");
?>
