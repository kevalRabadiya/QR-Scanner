const wrapper = document.querySelector('.wrapper');
const qrInput = document.querySelector('.form input');
const generaterbtn = document.querySelector('.form button');
const qrImg = document.querySelector('.qr-code img');


generaterbtn.addEventListener("click", () => {
    let qrvalue = qrInput.value;
    if (!qrvalue) return; //if the input empty then return from here
    generaterbtn.innerText = "Generating QR Code..."
    //buit in api link from google
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add("active");
        generaterbtn.innerText = "Generate QR Code"
    });

})

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});