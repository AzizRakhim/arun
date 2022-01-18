document.getElementById('modeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
})

let elOpenModalBtn = document.getElementById('searchBtn');
let elCloseModalBtn = document.getElementById('closeModal');
let elModalBox = document.getElementById('modalBox');

elOpenModalBtn.addEventListener('click', function() {
    elModalBox.classList.add('show');
})

elCloseModalBtn.addEventListener('click', function() {
    elModalBox.classList.remove('show');
})