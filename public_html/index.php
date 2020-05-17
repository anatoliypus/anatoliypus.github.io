<?php

require_once('../src/commonInc.php');

$conn = connect();
if (!$conn) 
{
  echo 'Error';
  die();
}

mainPage($conn); 