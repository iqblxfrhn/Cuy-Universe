const nama = "Iqbal Farhan";
let usia = 21;

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        //INI ADALAH KONDISI PERTAMA
        generasi = "Generasi Remaja";
    } else if (usia > 18 && usia < 30) {
        //INI ADALAH KONDISI KEDUA
        generasi = "Generasi Dewasa";
    } else if (usia >= 30) {
        //INI ADALAH KONDISI KETIGA
        generasi = "Generasi Tuwir";
    } else if (usia < 10 && usia > 2) {
        //INI ADALAH KONDISI KE EMPAT
        generasi = "Generasi Bocil";
    } else {
        //INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        generasi = "Generasi Bayek";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();