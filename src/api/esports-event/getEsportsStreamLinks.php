<?php
// Returns the YouTube livestream tokens for esports competitions
// By:. Kovacs Lorand @ 2020 :))
require '../connect.php';
    
$tokenlist= [];

$sql = "SELECT * FROM esports_stream_links";
if($result = mysqli_query($con, $sql))
{
  while($row = mysqli_fetch_assoc($result))
  {
    $tokenlist[$row['game']] = $row['link'];
  }
  echo json_encode(['data'=>$tokenlist]);
}
else
{
  http_response_code(404);
}
?>