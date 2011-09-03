<?php 
$callback = $_REQUEST['callback'];

// Create the output object.
$output = array('id' => 1, 'url' => 'loianegroner.com');

//start output
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '([' . json_encode($output) . ']);';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($output);
}
