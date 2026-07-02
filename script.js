console.log("Branch fitur-deskripsi aktif");

const deskripsi = document.getElementById("deskripsi");
const btnUbah = document.getElementById("btnUbah");

if (deskripsi && btnUbah) {
    btnUbah.addEventListener("click", function () {
        deskripsi.textContent = "Deskripsi berhasil diubah menggunakan JavaScript.";
    });
}