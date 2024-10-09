<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// cái thông số hệ thống sql của m
$host     = "*";    //link cái ssql server của
$username = "*";    //username của server
$password = "*";    //password của server
$db_name  = "*";    //tên databse của m

// Tạo kết nối tới cái database của m
$conn = new mysqli($host, $username, $password, $db_name);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die(json_encode(array("error" => "Database connection failed")));
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // query cái sql
    $sql = "SELECT * FROM your_table";
    $result = $conn->query($sql);
    
    $data = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    
    echo json_encode($data);
}

// đóng database
$conn->close();
?>
