<?php

$arr = [1, [1, 2, null], [1, [344, ["str", ['0', null, 0]]]], ['111', "string"]];

function flatten($array)
{
    return array_reduce($array, function ($acc, $item) {
        return array_merge($acc, is_array($item) ? flatten($item) : [$item]);
    }, []);
}

var_dump(flatten($arr));
