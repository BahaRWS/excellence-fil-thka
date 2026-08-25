<?php
//suppposed to be in the data base hetha raw
$cours = [
    "suite ",
    "suite geometrique",
    "fonctions",
    "probabilites",
    "derivee",
    "integrale"
];

$input = strtolower($_GET["input"] ?? "");
$results = [];
foreach ($cours as $course) {

    if (str_contains(strtolower($course), $input)) {

        $results[] = [
            "name" => $course
        ];

    }
}
header("Content-Type: application/json");
echo json_encode($results);

?>