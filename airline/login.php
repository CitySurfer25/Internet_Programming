<?php
session_start();
$conn = new mysqli("localhost", "root", "", "dbAirline");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userid = $_POST['userid'];
    $password = $_POST['password'];
    
    $query = "SELECT * FROM tblUsers WHERE userid='$userid' AND password='$password'";
    $result = $conn->query($query);
    
    if ($result->num_rows > 0) {
        $_SESSION['userid'] = $userid;
        echo "Login Success";
        header("Location: index.php");
    } else {
        echo "Invalid credentials";
    }
}
?>
<form method="post" action="">
    <label>User ID:</label>
    <input type="text" name="userid" required><br>
    <label>Password:</label>
    <input type="password" name="password" required><br>
    <button type="submit">Login</button>
</form>
