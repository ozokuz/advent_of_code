<?php

$file_path = join("/", array(getcwd(), "..", "..", "..", "inputs", "1.txt"));
$contents = file_get_contents($file_path);
$calibration_data = explode("\n", $contents);
$numbers = str_split("1234567890");
$words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
$tests = array_merge($numbers, $words);

$total = 0;

foreach ($calibration_data as $value) {
  $first_pos = strlen($value) + 20;
  $first = "";
  foreach ($tests as $test) {
    $pos = strpos($value, $test);
    if ($pos === false)
      continue;
    if ($first_pos < $pos)
      continue;
    $first_pos = $pos;
    $first = $test;
  }

  $last_pos = -1;
  $last = "";
  foreach ($tests as $test) {
    $pos = strrpos($value, $test);
    if ($pos === false)
      continue;
    if ($last_pos > $pos)
      continue;
    $last_pos = $pos;
    $last = $test;
  }

  if (in_array($first, $words, true))
    $first = array_search($first, $words, true) + 1;
  if (in_array($last, $words, true))
    $last = array_search($last, $words, true) + 1;

  $digits = $first . $last;
  $total += $digits;
}

print($total);
