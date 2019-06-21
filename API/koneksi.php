<?php

$server = "localhost";

$user = "id9862788_yogie";

$pass = "12345";

$db = "id9862788_yogie";



$koneksi = mysqli_connect($server,$user,$pass,$db);

mysqli_set_charset($koneksi,'utf8');

if(mysqli_connect_errno()){

	echo 'Gagal melakukan koneksi ke Database : '.mysqli_connect_error();

}else{

}

?>