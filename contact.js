document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Biar gak reload

    //variabel data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;
    const phoneNumber = "6289675619870";
    const text = `Halo saya ${name}, email saya ${email}. Saya tertarik mengenai "${msg}"`;
    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waLink, '_blank'); //biar bukak di tab baru
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
