import scripturl from "./key.js";
console.log(scripturl)
const scriptURL = scripturl;
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('contact-reply');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    msg.innerHTML = "Thank you! I will be in touch with you soon.✌🏻";
    document.getElementById("myform").reset();
});