import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


let time = localStorage.getItem('videoplayer-stop-time')

player.setCurrentTime(time)

player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
});

player.on('pause', function (data) {
    localStorage.setItem('videoplayer-stop-time',data.seconds)
})

    


