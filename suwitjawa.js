function myFunction(event) {
    event.preventDefault(); // Mencegah perilaku default dari form (pengiriman ulang)
    
    // Mengambil nilai dari input 'username'
    const ambilDataUsernameUser = document.getElementById('username').value;
    console.log('input nama berhasil dan nama dari user adalah ' + ambilDataUsernameUser);

    const tampilkanAlert = document.getElementById('alert');
    const ambilId = document.getElementById('judul');

    if (!ambilDataUsernameUser) {
        tampilkanAlert.style.display = 'block';
    } else {
        tampilkanAlert.style.display = 'none'; // Sembunyikan pesan error jika username diisi

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
        if (!document.getElementById('pesanWaktu')) {
            const tampilkanWaktu = document.createTextNode(pesan);
            inputWaktu.appendChild(tampilkanWaktu);
            inputWaktu.id = 'pesanWaktu'; // Menambahkan id untuk pesan waktu
            ambilId.appendChild(inputWaktu);
            inputWaktu.style.textAlign = 'center';
        }

        // Menampilkan username user jika sudah mengisi
        const inputNama = document.createElement('h1');
        const tampilkanNama = document.createTextNode(`${ambilDataUsernameUser}`);
        inputNama.appendChild(tampilkanNama);
        ambilId.appendChild(inputNama);
        inputNama.style.textAlign = 'center';

        // Menghapus form setelah pengguna mengirimkan formulir
        document.getElementById('myForm').reset();
        document.getElementById('myForm').style.display = 'none';
    }

   // menampilkan loading setelah username terinput 
    const loading = document.getElementById('loading');
    const loader = document.querySelector('.loader')

    // Mulanya sembunyikan elemen loading
    loading.style.display = 'none';

    if (ambilDataUsernameUser) {

                // style untuk loading
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

                // Tambahkan gaya CSS ke elemen loader
                loader.style.border = '8px solid #f3f3f3';
                loader.style.borderTop = '8px solid #3498db';
                loader.style.borderRadius = '50%';
                loader.style.width = '50px';
                loader.style.height = '50px';
                loader.style.animation = 'spin 2s linear infinite';


                // Sembunyikan elemen loading setelah 5 detik
                setTimeout(() => {
                        loading.style.display = 'none';
                    }, 3000);
                } else {
                        console.log('Loading gagal boss');
                }

}

document.getElementById('myForm').addEventListener('submit', myFunction);


do {
    let player = prompt('Silahkan pilih (kertas/gunting/batu)').toLowerCase();
    let comp = Math.random();

    let compChoice;
    if (comp < 0.33) {
        compChoice = 'kertas';
    } else if (comp < 0.67) {
        compChoice = 'gunting';
    } else {
        compChoice = 'batu';
    }

    if (!(player === 'kertas' || player === 'gunting' || player === 'batu')) {
        let cobaLagi = confirm('Maaf Anda memilih opsi yang tidak disediakan. Apakah akan diulang?');
        if (!cobaLagi) {
            alert('Terima kasih!');
            break;
        } else {
            continue;
        }
    } else {
        if ((compChoice === 'kertas' && player === 'gunting') ||
            (compChoice === 'gunting' && player === 'batu') ||
            (compChoice === 'batu' && player === 'kertas')) {
            alert('Komputer memilih ' + compChoice + ' dan kamu memilih ' + player);
            alert('Maka dari itu kamu MENANG');
        } else if (compChoice === player) {
            alert('Komputer memilih ' + compChoice + ' dan kamu memilih ' + player);
            alert('Maka dari itu kamu IMBANG');
        } else {
            alert('Komputer memilih ' + compChoice + ' dan kamu memilih ' + player);
            alert('Maka dari itu kamu KALAH');
        }
        
        let cobaLagi = confirm('Apakah ingin diulang?');
        if (!cobaLagi) {
            alert('Terima kasih!');
            break;
        } 
    }
} while (true);

const inputUserKertas = document.querySelector('.userKertas')
inputUserKertas.addEventListener('click', function() {
  alert('ini kertas')
})

const inputUserGunting = document.querySelector('.userGunting')
inputUserGunting.addEventListener('click', function() {
  alert('ini gunting')
})

const inputUserBatu = document.querySelector('.userBatu')
inputUserBatu.addEventListener('click', function() {
  alert('ini batu')
})





