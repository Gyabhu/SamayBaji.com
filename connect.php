<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$recipename = $_POST['recipename'];
	$recipe= $_POST['recipe'];
	// Database connection
	
	$conn = mysqli_connect ('localhost','root','','viva_voce');
	$sql_query = "INSERT INTO recipe (full_name,email,recipe_name,recipe)
    VALUES ('$name','$email','$recipename','$recipe')";
    if(mysqli_query($conn, $sql_query))
   {
	echo file_get_contents("thankyou.html");
	$to = $email;
	$subject = "Submission Sucessful";
	$message = "Dear ". $name.", Your Recipe on ".$recipename . " has been recieved, we will be taking a good look at it and uploading it to our website. Thank you for your precious time submitting Recipes. We ought to engage more with you." ; 
	$header = "From: gyabhumuktan@yahoo.com";         
	mail ($to,$subject,$message,$header);
   }
    else
   {
	echo "Error: " .$sql . "" . mysqli_error($conn);
   }
   mysqli_close($conn);

?>