// script.js
function hitungCinta() {
  var nama1 = document.getElementById("name1").value.toLowerCase();
  var nama2 = document.getElementById("name2").value.toLowerCase();

  if (nama1 === "" || nama2 === "") {
    alert("Harap masukkan kedua nama!");
    return;
  }

  var gabunganNama = nama1 + nama2;
  var angkaCinta = 0;

  // Menghitung nilai berdasarkan huruf
  for (var i = 0; i < gabunganNama.length; i++) {
    angkaCinta += gabunganNama.charCodeAt(i);
  }

  // Menentukan persentase cinta berdasarkan angkaCinta
  var persentase = angkaCinta % 101; // Persentase antara 0 hingga 100
  var message = "";

  if (persentase >= 80) {
    message = "Wih Cocok Banget Kalian Yaa";
  } else if (persentase >= 50) {
    message = "Emmm.. Lumayan Lah Ya, Oke Juga!";
  } else {
    message = "Pfftt, Nice try Bro 😹";
  }

  // Menampilkan hasil
  document.getElementById("persentase").innerText =
    "Persentase Cinta: " + persentase + "%";
  document.getElementById("message").innerText = message;
}
