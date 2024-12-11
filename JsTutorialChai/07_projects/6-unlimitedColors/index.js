const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#'

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// let changeColor
// document.querySelector('#start').addEventListener('click',function(e){
//     const body = document.querySelector('body')
//     changeColor = setInterval(function(){
//         body.style.backgroundColor = randomColor()
//     },1000)
// })
// document.querySelector('#stop').addEventListener('click',function(e){
//    clearInterval(changeColor)
// })

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);