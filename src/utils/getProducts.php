<?php 

function getProducts(): void 
{
  $json = file_get_contents('php://input');
  $data = json_decode($json);

  $conn = connect();
  if (!$conn) 
  {
    echo 'Error';
    die();
  }

  $sql = "SELECT * 
          FROM products
          ORDER BY id DESC
          LIMIT 1";

  $result = mysqli_query($conn, $sql);
  $lastId = mysqli_fetch_assoc($result)['id'];

  $availablePagesAmount = (int) ($lastId / $data->{'itemsPerPage'}) + 1;
  if ($lastId == $data->{'itemsPerPage'}) 
  {
    $availablePagesAmount = (int) ($lastId / $data->{'itemsPerPage'});
  }
  else 
  {
    $availablePagesAmount = (int) ($lastId / $data->{'itemsPerPage'}) + 1;
  }
  if ($data->{'requiredPage'} <= $availablePagesAmount)
  {
    $itemStart = $lastId - ($data->{'requiredPage'} - 1) * $data->{'itemsPerPage'};
    $itemEnd = $itemStart - $data->{'itemsPerPage'};
    if ($itemEnd <=0) 
    {
      $itemEnd = 1;
    }

    $sort = $data->{'sort'};
    $order = $data->{'order'};

    if (isset($sort)) {
      if ($sort == 'name' and $order == '+') 
      {
        if ($itemEnd == 1) {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd
            ORDER BY name ASC";
        } 
        else 
        {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd
            ORDER BY name ASC";
        }
      }
      
      if ($sort == 'name' and $order == '-') 
      {
        if ($itemEnd == 1) {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd
            ORDER BY name DESC";
        } 
        else 
        {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd
            ORDER BY name DESC";
        }
      }

      if ($sort == 'price' and $order == '+') 
      {
        if ($itemEnd == 1) {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd
            ORDER BY price ASC";
        } 
        else 
        {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd
            ORDER BY price ASC";
        }
      }

      if ($sort == 'price' and $order == '-') 
      {
        if ($itemEnd == 1) {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd
            ORDER BY price DESC";
        } 
        else 
        {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd
            ORDER BY price DESC";
        }
      }

      if ($sort == 'popularity' and $order == '+') 
      {
        if ($itemEnd == 1) {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd
            ORDER BY popularity ASC";
        } 
        else 
        {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd
            ORDER BY popularity ASC";
        }
      }

      if ($sort == 'popularity' and $order == '-') 
      {
        if ($itemEnd == 1) {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd
            ORDER BY popularity DESC";
        } 
        else 
        {
          $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd
            ORDER BY popularity DESC";
        }
      }
    } 
    else if ($itemEnd == 1)
    {
      $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id >= $itemEnd";
    } else 
    {
      $sql = "SELECT * 
            FROM products 
            WHERE id <= $itemStart AND id > $itemEnd";
    }
    
    $result = mysqli_query($conn, $sql);
    $json = array();
    while ($row = mysqli_fetch_assoc($result)) 
    {
      array_push($json, array('id' => $row['id'], 'name' => $row['name'], 'weight' => $row['weight'], 'imagePath' => $row['imagePath'], 'calorieAmount' => $row['calorie_amount']));
    }
    echo json_encode(array($json, $availablePagesAmount, array($itemStart, $itemEnd)));
  } 
  else 
  {
    echo json_encode(array());
  }
  mysqli_close($conn);
}