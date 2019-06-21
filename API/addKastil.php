<?php

	include_once "koneksi.php";

	$data = json_decode(file_get_contents('php://input'), true);

	$id_kastil=$data['id_kastil'];

	$nama_kastil=$data['nama_kastil'];

	$deskripsi=$data['deskripsi'];

	$id_menu=$data['id_menu'];

	$image=$data['image'];



	$sql = "insert into kastil(id_kastil, nama_kastil, deskripsi, id_menu, image) values('$id_kastil', '$nama_kastil', '$deskripsi', '$id_menu', '$image')";

	

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