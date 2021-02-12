<?php
// из многомерного в одинарный
$arr = [1, [1, 2, null], [1, [344, ["str", ['0', null, 0]]]], ['111', "string"]];

function flatten($array)
{
    return array_reduce($array, function ($acc, $item) {
        return array_merge($acc, is_array($item) ? flatten($item) : [$item]);
    }, []);
}

var_dump(flatten($arr));
/** 
array(12) {
  [0]=>    
  int(1)   
  [1]=>    
  int(1)   
  [2]=>    
  int(2)   
  [3]=>
  NULL
  [4]=>
  int(1)
  [5]=>
  int(344)
  [6]=>
  string(3) "str"
  [7]=>
  string(1) "0"
  [8]=>
  NULL
  [9]=>
  int(0)
  [10]=>
  string(3) "111"
  [11]=>
  string(6) "string"
}
 **/
