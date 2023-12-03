<?php

$file_path = join("/", array(getcwd(), "..", "..", "..", "inputs", "1.txt"));
$contents = file_get_contents($file_path);
$calibration_data = explode("\n", $contents);
$numbers = str_split("1234567890");

$total = 0;

foreach ($calibration_data as $value) {
  $digits = "";
  for ($i = 0; $i < strlen($value); $i++) {
    $digit = $value[$i];
    if (!in_array($digit, $numbers, true))
      continue;

    $digits .= $digit;
    break;
  }

  for ($i = strlen($value) - 1; $i >= 0; $i--) {
    $digit = $value[$i];
    if (!in_array($digit, $numbers, true))
      continue;

    $digits .= $digit;
    break;
  }

  $total += $digits;
}

print($total);
