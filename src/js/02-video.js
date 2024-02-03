import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ustawiam zmienne zgodnie z dokumentacją Pre-existing player
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//pobieram zmienną z lokal storage
let videoStartTime = localStorage.getItem('videoplayer-current-time')

// sprawdzam czy ma wartość undefinied
if (videoStartTime === undefined) {
    videoStartTime=0
}

//ustawienie czasu
player.setCurrentTime(videoStartTime);

//funkcja pobierania czasu filmu i wpisywania jej do lokal storage
function getCurrentTime() {
    player.getCurrentTime().then(function (time) {
        localStorage.setItem('videoplayer-current-time', Math.floor(time));
    }).catch(function (error) {
        localStorage.setItem('error', error);
    });
}

//zmienna ustawiająca czas filmu co 1 sek
let time = throttle(getCurrentTime, 1000);

//uruchomienie playare i uruchomienie funkcji timeupdate ze mnienną time
player.on('timeupdate', time)


    


