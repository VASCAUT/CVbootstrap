const ratio = .2
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio}
const handleIntersect = function (entries, observer) {
   entries.forEach(function(entry){
       if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
       } else {
        entry.target.classList.remove('reveal-visible')
       }
    })
}     
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)})

var sound = new Audio();
sound.src = "assets/sound/Faster-Tempo-2020-03-15_-_Western_Adverntures_-_David_Fesliyan.mp3";
$('#sound').click(function () {
        if(sound.paused){
          sound.play();
          button.innerHTML = "Pause";}
        else {
          sound.pause();
          button.innerHTML = "Play";}
}) 