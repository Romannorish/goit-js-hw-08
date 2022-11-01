import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

// Ініціалізація плеєра__________________

const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));
 
function onPlay(timeupdate) {
    let pause = timeupdate.seconds;
    console.log(pause);
    localStorage.setItem("videoplayer-current-time", pause);
}


const currentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
});

















// const currentTime = localStorage.getItem('videoplayer-current-time');
// console.log(currentTime);
// player.setCurrentTime(currentTime).then(function (pause) {
//    // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });