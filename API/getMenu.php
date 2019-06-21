<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";

	$sql = "select * from menu";
	$query = mysqli_query($koneksi, $sql);

	$arrMenu = array();
	while ($row = mysqli_fetch_array($query)){
		$arrMenu[] = $row;
	}
	echo json_encode($arrMenu );
	mysqli_close($koneksi);
 ?>