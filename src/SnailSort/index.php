<?php
//Snail Sort
$arr =  [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
];


function snail($arr)
{
    $result = [];
    while (count($arr)) {
        $first = array_shift($arr);
        $pop = [];
        for ($i = 0; $i < count($arr); $i++) {
            array_push($pop, array_pop($arr[$i]));
        }
        array_push($result, ...$first, ...$pop);

        $arr = array_reverse($arr);
        $arr = array_map(fn ($row) => array_reverse($row),  $arr);
    }
    return $result;
}

echo json_encode(snail($arr));
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
