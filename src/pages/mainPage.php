<?php 

function mainPage($connection): void 
{
  $sql = "SELECT name, review_content, review_date 
          from reviews
          ORDER BY review_id DESC
          LIMIT 10";
  $result = mysqli_query($connection, $sql);
  renderTemplate('main.php', ['reviews' => $result]);
}