const menu = document.querySelector('#menu');

/* const strawberry = {
    name:'イチゴ',
    Img:'strawberry.jpg',
    price:450,
}
const key = 'name';

console.log(strawberry.key);
console.log(strawberry[key]); 

const list =['strawberry.jpg',
            'lime.jpg',
            'mango.jpg',
            'lemon.jpg',
            'fig.jpg',
            'apple.jpg'];
           console.log(list.length);*/

const lists = [
        {name:'イチゴ',
         img:'strawberry.jpg',
         price: 450,
        },

        {name:'ライム',
        img:'lime.jpg',
        price:400,
        },

       {name:'マンゴー',
        img:'mango.jpg',
        price: 500,
       },

       {name:'レモン',
        img:'lemon.jpg',
        price: 400,
       },

       {name:'イチジク',
        img:'fig.jpg',
        price: 500,
       },

       {name:'リンゴ',
        img:'apple.jpg',
        price: 400,
       },
]
//リスト内のオブジェクト出力
//console.log(list[0].name);

for(let i = 0; i < lists.length; i++){

    /*const name = lists[i].name
    const img  = lists[i].img
    const price = lists[i].price*/

    //上記の省略形

    const {name,img,price} = lists[i];
    

    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend',content);

}



//menu.textContent = content;



