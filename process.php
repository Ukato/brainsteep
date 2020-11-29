<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "member.cory@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $name, "From:" . $email);
    
    header('Location: https://www.brainsteep.com/success.html');
  }