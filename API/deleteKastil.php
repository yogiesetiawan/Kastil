<?php

	include_once "koneksi.php";

	$data = json_decode(file_get_contents('php://input'), true);

	$id_kastil=$data['id_kastil'];



	$sql = "delete from kastil where id_kastil='$id_kastil'";

	

	$info=array();

	$info['sql']=$sql;

	if (mysqli_query($koneksi, $sql)) {

		$info['success'] =1;

		$info['detail'] = 'success';

	} else {

		$info['success'] =0;

		$info['detail'] =mysqli_error($koneksi);

	}



	mysqli_close($koneksi);

	echo json_encode($info);

?>