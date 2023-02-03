const parent = document.querySelectorAll('.js-input');

window.addEventListener('pageshow', () => {
    parent.forEach(e => {

        e.addEventListener('focus', (e) => {
            focusState(e.target);
        })
        e.addEventListener('blur', (e) => {
            blurState(e.target);
        })

        focusState(e);
        blurState(e);
    });     
})

function focusState(e){
    parentEl = e.parentElement;
    parentEl.classList.add('focus');
}

function blurState(e){
    parentEl = e.parentElement;
    if(!e.value){
        parentEl.classList.remove('focus');
    }
}

const wrapper = document.querySelector(".portal__wrapper__form__wrapper__field");
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
