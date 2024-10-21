// variabel symbols berisi array simbol"
const symbols = ["🍎", "🍒", "🍇", "🍉", "🍋", "🍊", "🍍", "⭐"];

//variabel untuk melacak jumlah spin
let spinCount = 0;

//function untuk mengenerate simbol random dari array
function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

//function untuk spin slot
function spinSlots() {
    //increment spin
    spinCount++;

    //dapatkan setiap element slot
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    let symbol1, symbol2, symbol3;

    //Pada putaran ke 5, pastikan pengguna menang dengan mengatur semua simbol menjadi sama
    if (spinCount === 5) {
        //pilih sebuah simbol acak untuk memenangkan spin
        symbol1 = symbol2 = symbol3 = getRandomSymbol();

        //reset spin count setelah spin kelima
        spinCount = 0;
    } else {
        // Jika tidak, buat simbol acak untuk setiap slot
        symbol1 = getRandomSymbol();
        symbol2 = getRandomSymbol();
        symbol3 = getRandomSymbol();
    }

    // Atur simbol ke slot
    slot1.textContent = symbol1;
    slot2.textContent = symbol2;
    slot3.textContent = symbol3;

    // Periksa apakah pemain menang (ketiga simbolnya sama)
    const message = document.getElementById('message');
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        message.textContent = "🎉 Kau Dikasi Menang! 🎉";
        message.style.color = "green";
    } else {
        message.textContent = "Coba lagi!";
        message.style.color = "red";
    }
}
