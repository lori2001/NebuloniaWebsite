<?php
// Returns the teams for esports competitions
// By:. Kovacs Lorand @ 2020 :))
require '../connect.php';
    
$teamlist= [];

$sql = "SELECT * FROM esports_teams";
if($result = mysqli_query($con, $sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $teamlist[$index]['name'] = $row['team'];
    $teamlist[$index]['members'] = $row['members'];
    $teamlist[$index]['game'] = $row['game'];
    $index++;
  }
  echo json_encode(['data'=>$teamlist]);
}
else
{
  http_response_code(404);
}
?>