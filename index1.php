<?PHP
$EmpID = $_GET['ID'];
function readCSV($csvFile){
	$result = array();
    $file_handle = fopen($csvFile, 'r');
    while (!feof($file_handle) ) {
        $line_of_text[] = fgetcsv($file_handle, 1024);
    }
    fclose($file_handle);
   
   // Convert arraay into dictionary
  	foreach ($line_of_text as $row)	{ 
    $id = $row[1];
    //unset($row[1]);
    $result[$id] = $row;
	}
	return $result;
}


// Set path to CSV file
$csvFile = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRh59E-O3OhnS61kfn-F2t4NQ9sPjbL4LA_89YrBZgOtkX1EJL6VkE3kM37dECFT7FIlPK9Gqxy796d/pub?gid=0&single=true&output=csv';

$dict = readCSV($csvFile);

if (array_key_exists($EmpID, $dict)) {
 // Do stuff because `banana` exists

print_r($dict[$EmpID][2]."|".$dict[$EmpID][3]."|".$dict[$EmpID][0]."|".$dict[$EmpID][5]."|".$dict[$EmpID][6]."|".$dict[$EmpID][7]."|".$dict[$EmpID][8]."|".$dict[$EmpID][11]."|".$dict[$EmpID][9]."|".$dict[$EmpID][10]);	

}

else echo"NA";

?>



<?php






function readCSV1($csvFile){
    $file_handle = fopen($csvFile, 'r');
    while (!feof($file_handle) ) {
        $line_of_text[] = fgetcsv($file_handle, 1024);
    }
    fclose($file_handle);
    return $line_of_text;
}
?>