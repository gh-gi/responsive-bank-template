<?php
// create variables using the name attributes and POST method from the form in index.html for the username and password form fields.
$UID=$_POST['username']; //variable called $UID for the value entered into form.
$PWD=$_POST['password']; //variable called $PWD for the value entered into form.
// echo $UID; // testing, should display whatever is entered into the form username field.
// echo $UID; // testing, should display whatever is entered into the form password field.

// establish connection
$host='localhost'; // default
$dbUsername='root'; // default
$dbPassword=''; // enter password
$dbname=''; // enter name of database here

$conn=new mysqli($host, $dbUsername, $dbPassword,$dbname); // connection using above database information

if(mysqli_connect_error()){
    die('connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
} else {
   // echo "Connected"; //testing connection.
    $SQL="SELECT * FROM users WHERE username='$UID' AND pwd='$PWD' limit 1";
    
    $result = mysqli_query($conn, $SQL);

  if(mysqli_num_rows($result)==1) {
    echo '<script>alert("Welcome to ABC Bank!")
    window.location="index.html"; </script>';
    exit(); //exit function
  } else {
    echo '<script>alert("Your username or password is incorrect.")
    window.location="index.html"; </script>';
  }
} 

?>