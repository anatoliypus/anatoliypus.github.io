<?php 

function connect()
{
    $server = 'localhost';
    $user = 'cw51754_zaomari';
    $password = '12345';
    $db = 'cw51754_zaomari';
    
    $connection = mysqli_connect($server, $user, $password, $db);
    return $connection;
}



