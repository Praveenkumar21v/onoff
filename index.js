const onSwitch= document.getElementById('nightMode');
const body = document.querySelector('body');
let audio=document.getElementById('audio')
onSwitch.addEventListener('click',()=>{
audio.play();
onSwitch.classList.toggle("bi-moon")

if(onSwitch.classList.toggle("bi-brightness-high-fill")){
body.style.background='white'
body.style.color='black'
body.style.transition='2s'
    }else{
        body.style.background='black'
        body.style.color='white'
        body.style.transition='2s'
    }
})
 


