
let songIndex=0;
let audioElement = new Audio('Mareez - E - Ishq.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs=[
    {songName:"Mareez-E-Ishq", filePath:"Mareez - E - Ishq.mp3"},
    {songName:"Mareez-E-Ishq", filePath:"Mareez - E - Ishq.mp3"},
    {songName:"Mareez-E-Ishq", filePath:"Mareez - E - Ishq.mp3"},
    {songName:"Mareez-E-Ishq", filePath:"Mareez - E - Ishq.mp3"},
    {songName:"Mareez-E-Ishq", filePath:"Mareez - E - Ishq.mp3"},
    {songName:"Mareez-E-Ishq", filePath:"Mareez - E - Ishq.mp3"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
