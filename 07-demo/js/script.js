const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup',() => {
    count.textContent = text.value.length;

//100文字を超えるなら
if(text.value.length > 100){
    count.classList.add('alert');
    //そうでないなら
}else{
    count.classList.remove('alert');
}})