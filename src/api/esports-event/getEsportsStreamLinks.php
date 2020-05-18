<?php
// Returns the YouTube livestream tokens for esports competitions
// By:. Kovacs Lorand @ 2020 :))
require '../connect.php';
    
$tokenlist = [];

$sql = "SELECT * FROM esports_stream_links";
if($result = mysqli_query($con, $sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $tokenlist[$index]['link'] = $row['link'];
    $tokenlist[$index]['game'] = $row['game'];
    $index++;
  }
  echo json_encode(['data'=>$tokenlist]);
}
else
{
  http_response_code(404);
}
?>