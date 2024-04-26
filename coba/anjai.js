function hitungIPS() {
    var nilaiInput = document.getElementById("nilai").value.trim().toUpperCase();
    var sksInput = document.getElementById("sks").value.trim().split(",");
    
    // Mengkonversi input bobot SKS menjadi array angka
    var sks = sksInput.map(function(item) {
        return parseInt(item.trim(), 10);
    });
    
    // Memanggil fungsi untuk menghitung IPS
    var ips = hitungIPSFromInput(nilaiInput, sks);
    
    // Menampilkan hasil IPS
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "IPS Anda adalah: " + ips;
}

// Fungsi untuk menghitung IPS
function hitungIPSFromInput(nilai, sks) {
    var totalBobot = 0;
    var totalSKS = 0;
    
    // Loop melalui setiap mata kuliah
    for (var i = 0; i < nilai.length; i++) {
        // Konversi nilai huruf menjadi bobot numerik
        var bobot = 0;
        switch (nilai[i]) {
            case "A":
                bobot = 4.0;
                break;
            case "A-":
                bobot = 3.7;
                break;
            case "B+":
                bobot = 3.3;
                break;
            case "B":
                bobot = 3.0;
                break;
            case "B-":
                bobot = 2.7;
                break;
            case "C+":
                bobot = 2.3;
                break;
            case "C":
                bobot = 2.0;
                break;
            case "C-":
                bobot = 1.7;
                break;
            case "D":
                bobot = 1.0;
                break;
            case "E":
                bobot = 0.0;
                break;
            default:
                console.log("Nilai tidak valid untuk mata kuliah ke-" + (i+1));
                continue;
        }
        
        // Menghitung total bobot dan SKS
        totalBobot += bobot * sks[i];
        totalSKS += sks[i];
    }
    
    // Menghitung IPS
    var ips = totalBobot / totalSKS;
    return ips.toFixed(2); // Mengembalikan IPS dengan dua angka desimal
}
