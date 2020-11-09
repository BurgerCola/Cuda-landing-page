let bubu = document.querySelectorAll('.input_text');
let hold = document.querySelectorAll('.text_holder');

for(let i = 0; i < bubu.length; i++){
  bubu[i].addEventListener('input', function(){
    hold[i].style.display = ( this.value == "" ) ? 'inline' : 'none';
  });
}

