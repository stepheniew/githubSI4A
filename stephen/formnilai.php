<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="">
        <h1>Data Nilai</h1>
        <pre>
    NPM     : <input type="text" size="11" name="npm">
    Nama    : <input type="text" size="25" name="nama">
    Jurusan : <select name="jurusan">
        <option value="SI">Sistem Informasi</option>
        <option value="IF">Informatika</option>
        </select>
    IPK     : <input type="text" size="5" name="ipk">
        </pre> 
        <input type="Submit" value="Tampilkan">
        <input type="Reset" value="Cancel">
    </form>

    <?php
        $nilai= $_POST['ipk'];
        echo "Nilai anda adalah : $nilai <br>";
        if($nilai>=2.00)
        {
            echo"Anda dinyatakan lulus";
        }
        else
        {
            echo"Anda dinyatakan gagal";
        }
    ?>

</body>
</html>