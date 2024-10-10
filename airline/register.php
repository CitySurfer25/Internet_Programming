<?php
$conn = new mysqli("localhost", "root", "", "dbAirline");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userid = $_POST['userid'];
    $password = $_POST['password'];
    $fullName = $_POST['fullName'];
    
    $query = "INSERT INTO tblUsers (userid, password, fullName) VALUES ('$userid', '$password', '$fullName')";
    if ($conn->query($query)) {
        echo "Registration Success";
        header("Location: flight_booking.php");
    } else {
        echo "Registration failed";
    }
}
?>
<form method="post" action="" onsubmit="return validateForm()">
    <label>User ID:</label>
    <input type="text" name="userid" required><br>
    <label>Password:</label>
    <input type="password" name="password" required><br>
    <label>Confirm Password:</label>
    <input type="password" name="confirm_password" required><br>
    <label>Full Name:</label>
    <input type="text" name="fullName" required><br>
    <button type="submit">Register</button>
</form>

<script>
function validateForm() {
    let pass = document.forms[0]["password"].value;
    let confirmPass = document.forms[0]["confirm_password"].value;
    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}
</script>
