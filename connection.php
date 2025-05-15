<?php 
    $hostname = "localhost";
    $username  = "root";
    $password = "";
    $database ="HABITACIONES";

    // Crear la conexión
    $conn = new mysqli($hostname, $username, $password, $database);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión a la base de datos: " . $conn->connect_error);
    }
    if (!isset($conn)) {
        die("Error: No se pudo establecer la conexión a la base de datos.");
    }
    // Establecer el conjunto de caracteres a UTF-8
    $conn->set_charset("utf8");

?>

