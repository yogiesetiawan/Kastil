<?php 

	header("Content-type: application/json; charset=ISO-8859-1");

	include_once "koneksi.php";

	$id_kastil=$_GET['id_kastil'];



	$sql = "select * from kastil where id_kastil='$id_kastil'";

	$query = mysqli_query($koneksi, $sql);



	$arrKastil = array();

	while ($row = mysqli_fetch_array($query)){

		$arrKastil[] = $row;

	}

	echo json_encode($arrKastil );

	mysqli_close($koneksi);

 ?>

 

 