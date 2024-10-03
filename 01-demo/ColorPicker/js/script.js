//カラーピッカーでの色指定の値取得コード
//console.log(document.querySelector('#colorPicker').value)

//colorTextの文字列変換コードの変数
const text = document.querySelector('#colorText');

//colorPickerのコードの値取得コードの変数
const color = document.querySelector('#colorPicker');




//イベントの概念がよくわからない、、
const colorBg = () => {
    //カラーコードを表示
    if (color.value ==='#ffffff'){
        text.textContent = `カラーコード：${color.value} (white)`;
    } else if(color.value === '#000000'){
        text.textContent = `カラーコード：${color.value}(black);`
    }else{
        text.textContent = `カラーコード：${color.value};`
    }

    //選択した色を背景色に指定
    document.body.style.backgroundColor = color.value;

    document.body.style.color = color.value;
}
//カラーピッカーが変更されたら、colorBgを発動させる
color.addEventListener('input',colorBg);



