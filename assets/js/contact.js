const scriptURL = 'https://script.google.com/macros/s/AKfycbw7LD9IyH8LnLnqOHhKmOvRz9vR4IGs7Q67wvfZW5Ir4unBFdV_DquuBe-FS1t89DN3iw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('contact-reply');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    msg.innerHTML = "Thank you! I will be in touch with you soon.✌🏻";
    document.getElementById("myform").reset();
});