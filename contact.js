document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Biar gak reload

    // Ambil data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;

    // NOMOR WHATSAPP (Gunakan kode negara tanpa +, misal 62896...)
    const phoneNumber = "6289675619870"; 

    // Format Pesan (Encode URI buat handle spasi & enter)
    // Halo saya (nama), email saya (email). Saya tertarik mengenai "(pesan)"
    const text = `Halo saya ${name}, email saya ${email}. Saya tertarik mengenai "${msg}"`;
    const encodedText = encodeURIComponent(text);

    // Buka link WhatsApp
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waLink, '_blank'); // Buka di tab baru
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbw8t0IJBcOVkuNtK_Fhya0FQtGutE1bkw2RM9jD7LGaR0dORZ1tQLU0EH37xTatR4PI/exec'
const form = document.forms['whatsappForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})
