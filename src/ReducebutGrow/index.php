<?php

$arr = [2, 2, 2, 2, 2, 2];

function grow($x)
{
    return array_reduce($x, fn ($acc, $item) => $acc * $item, 1);
}

echo grow($arr);
