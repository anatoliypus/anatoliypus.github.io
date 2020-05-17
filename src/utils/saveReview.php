<?php 

function saveReview(): void 
{
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $review = $_POST['review-content'];

  $nameNotContainsDigits = TRUE;

    $nameArr = str_split($name);

    foreach ($nameArr as $char)
    {
      if (is_numeric($char))
      {
        $nameNotContainsDigits = FALSE;
      }
    }

  $json = array();

  if (!$nameNotContainsDigits or strlen($name) == 0) 
  {
    array_push($json, 'name');
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL))
  {
    array_push($json, 'email');
  }

  if (($mobile[0] != '+' and $mobile[0] != '8') or strlen($mobile) > 12 or strlen($mobile) < 11)
  {
    array_push($json, 'mobile');
  }

  if (strlen($review) == 0)
  {
    array_push($json, 'review-content');
  }

  echo json_encode($json);

  if (count($json) > 0)
  {
    die();
  }

  $conn = connect();
  $sql = "INSERT INTO reviews (name, email, number, review_content, review_date)
          VALUES ('{$name}', '{$email}', '{$mobile}', '{$review}', now());";
  mysqli_query($conn, $sql);

  mysqli_close($conn);
}