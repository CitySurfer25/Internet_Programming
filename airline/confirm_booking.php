<?php
session_start();
if (!isset($_SESSION['userid'])) {
    header("Location: login.php");
}
echo "Booking confirmed for " . $_SESSION['userid'];
?>
