<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['gender'])  &&
        isset($_POST['number']) && isset($_POST['date'])) {
        
        $username = $_POST['username'];
        // $password = $_POST['password'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $phoneCode = $_POST['number'];
        $phone = $_POST['date'];
		if (!empty($username) ||!empty($email) || !empty($gender) || !empty($number) || !empty($date))
		{ 
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "test";
		//create connection
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM register WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO register(username, email, gender, number, date) values(?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("ssssis",$username,  $email, $gender, $number, $date);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}
}