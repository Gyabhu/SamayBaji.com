<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$recipename = $_POST['recipe-name'];
	$recipe= $_POST['recipe'];
   
   
	

	// Database connection
	$conn = mysqli_connect ('localhost','root','','viva_voce');
	$sql_query = "INSERT INTO recipe (full_name,email,recipe_name,recipe)
    VALUES ('$name','$email','$recipename','$recipe')";
    if(mysqli_query($conn, $sql_query))
   {
	echo file_get_contents("thankyou.html");
   }
    else
   {
	echo "Error: " .$sql . "" . mysqli_error($conn);
   }
   mysqli_close($conn);
?>s