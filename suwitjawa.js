 // Menampilkan data dari waktu 
    const inputWaktu = document.createElement('h1');
    const x = new Date();
    const waktu = x.toLocaleTimeString();
    const jam = parseInt(waktu.split(':')[0]);
    let pesan = '';

    if (jam >= 0 && jam < 6) {
        pesan = 'Selamat Malam';
    } else if (jam >= 6 && jam < 12) {
        pesan = 'Selamat Pagi';
    } else if (jam >= 12 && jam < 18) {
        pesan = 'Selamat Siang';
    } else {
        pesan = 'Selamat Malam';
    }

    // Cek apakah pesan waktu sudah ditampilkan sebelumnya
    const ambilId = document.getElementById('judul');

    if (!document.getElementById('pesanWaktu')) {
        const tampilkanWaktu = document.createTextNode(pesan);
        inputWaktu.appendChild(tampilkanWaktu);
        inputWaktu.id = 'pesanWaktu'; // Menambahkan id untuk pesan waktu
        ambilId.appendChild(inputWaktu);
        inputWaktu.style.textAlign = 'center';
    }

    // Mengambil nilai dari input 'username'
    // const ambilDataUsernameUser = document.getElementById('username').value;
    // console.log('input nama berhasil dan nama dari user adalah ' + ambilDataUsernameUser);

    // Menampilkan username user jika sudah mengisi
    // const inputNama = document.createElement('h1');
    // const tampilkanNama = document.createTextNode(`${ambilDataUsernameUser}`);
    // inputNama.appendChild(tampilkanNama);
    // ambilId.appendChild(inputNama);
    // inputNama.style.textAlign = 'center';

    // Menghapus form setelah pengguna mengirimkan formulir
    // document.getElementById('myForm').reset();
    // document.getElementById('myForm').style.display = 'none';

// menyambungkan kode backend denagn front end untuk menentukan kertas gunting dan batu
// Menarget elemen DOM
const pilihGuntingElem = document.querySelector('.userGunting');
const pilihBatuElem = document.querySelector('.userBatu');
const pilihKertasElem = document.querySelector('.userKertas');

// Variabel untuk menyimpan status pemilihan
let playerChoice = '';

// Menambahkan event listener untuk setiap elemen
pilihGuntingElem.addEventListener('click', () => {
  playerChoice = 'gunting';
  cekPilihan();
});

pilihBatuElem.addEventListener('click', () => {
  playerChoice = 'batu';
  cekPilihan();
});

pilihKertasElem.addEventListener('click', () => {
  playerChoice = 'kertas';
  cekPilihan();
});

// Menampilkan loading setelah pengguna memilih
const loading = document.getElementById('loading');

function cekPilihan() {
  if (playerChoice) {
    // Style untuk loading
    loading.style.display = 'flex';
    loading.style.justifyContent = 'center';
    loading.style.alignItems = 'center';
    loading.style.position = 'fixed';
    loading.style.top = '0';
    loading.style.left = '0';
    loading.style.width = '100%';
    loading.style.height = '100vh';
    loading.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    loading.style.zIndex = '9999';

    // Sembunyikan elemen loading setelah 3 detik dan lakukan perbandingan
    setTimeout(() => {
      loading.style.display = 'none';
      komputerMemilih();
    }, 3000);
  } else {
    console.log("LOADING GAGAL BOSS");
  }
}

// Fungsi untuk komputer memilih
function komputerMemilih() {
  let comp = Math.random();
  let compChoice = '';

  if (comp < 0.33) {
    compChoice = 'kertas';
  } else if (comp < 0.67) {
    compChoice = 'gunting';
  } else {
    compChoice = 'batu';
  }

  const tangkapDiv = document.getElementById('hasilPermainan');
  const tangkapHeader = document.getElementById('tampilkanPermainan');
  const modal = document.getElementById('myModal')


  
  // Logika permainan
  if ((compChoice === 'kertas' && playerChoice === 'gunting') ||
      (compChoice === 'gunting' && playerChoice === 'batu') ||
      (compChoice === 'batu' && playerChoice === 'kertas')) {
    const teks = `Komputer memilih ${compChoice} dan kamu memilih ${playerChoice} maka dari itu kamu MENANG`;
    tangkapHeader.innerText = teks;
    tangkapDiv.innerHTML = ''; // Bersihkan isi div sebelum menambahkan header
    tangkapDiv.appendChild(tangkapHeader);
    tangkapHeader.style.display = 'flex';
    tangkapHeader.style.justifyContent = 'center';
    tangkapHeader.style.alignItems = 'center';
    tangkapHeader.style.position = 'fixed';
    tangkapHeader.style.top = '0';
    tangkapHeader.style.left = '0';
    tangkapHeader.style.width = '100%';
    tangkapHeader.style.height = '100vh';
    tangkapHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    tangkapHeader.style.zIndex = '5';

    setTimeout(() => {
      tangkapHeader.style.display = 'none'
      modal.style.display = 'block'
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100vh';
      modal.style.backgroundColor = 'rgba(255, 255, 255, 1)';


    }, 3000);

  } else if (compChoice === playerChoice) {
    const teks = `Komputer memilih ${compChoice} dan kamu memilih ${playerChoice} maka dari itu kamu IMBANG`;
    tangkapHeader.innerText = teks;
    tangkapDiv.innerHTML = ''; // Bersihkan isi div sebelum menambahkan header
    tangkapDiv.appendChild(tangkapHeader);
    tangkapHeader.style.display = 'flex';
    tangkapHeader.style.justifyContent = 'center';
    tangkapHeader.style.alignItems = 'center';
    tangkapHeader.style.position = 'fixed';
    tangkapHeader.style.top = '0';
    tangkapHeader.style.left = '0';
    tangkapHeader.style.width = '100%';
    tangkapHeader.style.height = '100vh';
    tangkapHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    tangkapHeader.style.zIndex = '5';

    setTimeout(() => {
      tangkapHeader.style.display = 'none'
      modal.style.display = 'block'
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100vh';
      modal.style.backgroundColor = 'rgba(255, 255, 255, 1)';


    }, 3000);

  } else {
    const teks = `Komputer memilih ${compChoice} dan kamu memilih ${playerChoice} maka dari itu kamu KALAH`;
    tangkapHeader.innerText = teks;
    tangkapDiv.innerHTML = ''; // Bersihkan isi div sebelum menambahkan header
    tangkapDiv.appendChild(tangkapHeader);
    tangkapHeader.style.display = 'flex';
    tangkapHeader.style.justifyContent = 'center';
    tangkapHeader.style.alignItems = 'center';
    tangkapHeader.style.position = 'fixed';
    tangkapHeader.style.top = '0';
    tangkapHeader.style.left = '0';
    tangkapHeader.style.width = '100%';
    tangkapHeader.style.height = '100vh';
    tangkapHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    tangkapHeader.style.zIndex = '5';

    setTimeout(() => {
      tangkapHeader.style.display = 'none'
      modal.style.display = 'block'
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100vh';
      modal.style.backgroundColor = 'rgba(255, 255, 255, 1)';


    }, 3000);
  } 
}

// logika button iya dan tidak
function iya() {
  window.location.href = '../MAIN/main.html';
}

function tidak() {
  window.location.href = "../REPEAT/REPEAT.html"
}
