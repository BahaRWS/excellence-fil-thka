<?php
$type = $_GET["type"] ?? "";
$course = $_GET["course"] ?? "";
$filename = strtolower($course);
$filename = str_replace(" ", "_", $filename);

if ($type === "cours") {

    $folder = "courses";
} elseif ($type === "exercice") {
    $folder = "exercices";
} elseif ($type === "devoir") {
    $folder = "devoirs";
} else {

    http_response_code(400);
    echo "Invalid type";
    exit;
}
$file = $folder . "/" . $filename . ".txt";
if (!file_exists($file)) {

    http_response_code(404);
    echo "File not found";
    exit;
}
header("Content-Type: text/plain; charset=utf-8");
echo file_get_contents($file);
?>