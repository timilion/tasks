<?php
//Группировка анограм
$arr = ["abc", "bca", "cab", "tr", "rt", "yes", "no"];

$res = [];

foreach ($arr as $item) {
  $key = str_split($item);
  sort($key);
  $key = implode('', $key);
  if (!$res[$key]) {
    $res[$key] = [$item];
  } else {
    array_push($res[$key], $item);
  }
}
$res = array_values($res);
var_dump($res);
/*
array(4) {
  [0]=>
  array(3) {
    [0]=>
    string(3) "abc"
    [1]=>
    string(3) "bca"
    [2]=>
    string(3) "cab"
  }
  [1]=>
  array(2) {
    [0]=>
    string(2) "tr"
    [1]=>
    string(2) "rt"
  }
  [2]=>
  array(1) {
    [0]=>
    string(3) "yes"
  }
  [3]=>
  array(1) {
    [0]=>
    string(2) "no"
  }
}

*/
