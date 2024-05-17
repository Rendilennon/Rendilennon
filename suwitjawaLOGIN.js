function myFunction(event) {
    event.preventDefault(); // Mencegah perilaku default dari form (pengiriman ulang)
    
    // Mengambil nilai dari input 'username'
    const ambilDataUsernameUser = document.getElementById('username').value;
    console.log('input nama berhasil dan nama dari user adalah ' + ambilDataUsernameUser);

    const tampilkanAlert = document.getElementById('alert');

    if (!ambilDataUsernameUser) {
        tampilkanAlert.style.display = 'block';
    } else {
        tampilkanAlert.style.display = 'none'; 
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


                // Sembunyikan elemen loading setelah 3 detik
                setTimeout(() => {
                        loading.style.display = 'none';
                        // pindahkan link jika user sudah menyubmit username dan loading sudah berhasil 
                        window.location.href = '../MAIN/main.html';
                    }, 3000);
                } else {
                        console.log('Loading gagal boss');
                }
}

document.getElementById('myForm').addEventListener('submit', myFunction);

// Ekspor variabel ambilDataUsernameUser
// export { ambilDataUsernameUser };
