document.getElementById('modeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
})

let elOpenModalBtn = document.getElementById('searchBtn');
let elModalBox= document.getElementById('modalBox');
let elCloseBtn= document.getElementById('closeBtn');

elOpenModalBtn.addEventListener('click', function(){
    elModalBox.classList.add('show');
  })
  elCloseBtn.addEventListener('click', function(){
    elModalBox.classList.remove('show');
  })

