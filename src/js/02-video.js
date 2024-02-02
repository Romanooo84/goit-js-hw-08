import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

localStorage.clear()


player.on('timeupdate', function (data) {
    localStorage.clear()
         
});

    


