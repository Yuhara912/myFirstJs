const items = document.querySelectorAll('.img-item');
for(let i = 0; i < items.length;i++){
const keyframes = {
    filter:['blur(20px','blur(0)'],
};
/* rotate:['x 90deg',0],
 translate:['0 50px',0] 
 opacity:[0, 1],
 rotate:['5deg',0],
 scale:[1.1,1]*/

const options = {
    duration:600,
    delay:i*300,
    fill: 'forwards',
};

items[i].animate(keyframes,options);
}