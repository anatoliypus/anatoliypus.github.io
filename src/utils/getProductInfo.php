<?php

function getProductInfo(): void 
{
  $conn = connect();
  if (!$conn) 
  {
    die();
  }

  $id = file_get_contents('php://input');
  $sql = "SELECT * 
          FROM products 
          WHERE id = $id";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);
  echo json_encode($row);
}