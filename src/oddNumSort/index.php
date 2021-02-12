<?php

// отсортировать массив нечетных чисел в порядке возрастания, но сохранить четные числа в их положении
$arr = [1, 2, 4, 5, 78, 4, 9, 99, 22, 53, 555];
$filter = array_filter($arr, function ($k) {
    return $k & 1;
});
sort($filter, SORT_NUMERIC);
$result = [];
foreach ($arr as $key => $item) {
    if ($item & 1) {
        $result[] = array_shift($filter);
        continue;
    }
    $result[] = $item;
}
var_dump($result);
/* 
array(11) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(4)
  [3]=>
  int(5)
  [4]=>
  int(78)
  [5]=>
  int(4)
  [6]=>
  int(9)
  [7]=>
  int(53)
  [8]=>
  int(22)
  [9]=>
  int(99)
  [10]=>
  int(555)
}
*/