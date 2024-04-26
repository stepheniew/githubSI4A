<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo "<h5> selemat datang </h5>";
    ?>
    <hr/>
    <?php
        for($a=1;$a<=5;$a++){
            echo "<li>Item ke -" . $a . "</li>";

        }
    ?>
    <b> halaman ini dapat diakses melalui http://localhost/stephen/profile.php<b>
    <br>
    <br>
 
    <?php
        echo $_SERVER['HTTP_HOST'];
        var_dump($_SERVER); //khusus debugging
        print_r($_SERVER); //khusus array
    ?>
</body>
</html>