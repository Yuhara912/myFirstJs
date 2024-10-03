const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    //クリックされた時の処理

    document.body.classList.toggle('dark-theme');
    //もしボタンのテキストが「ダークモードにする」になっているなら
    if(btn.textContent==='ダークモードにする'){
        btn.textContent='ライトモードにする';
    
    //そうでないなら
    }else{
        btn.textContent='ダークモードにする';
    }
})
