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





