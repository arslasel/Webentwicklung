let Player = require('./lib/jasmine_examples/Player');
let Song = require('./lib/jasmine_examples/Song');

let player = new Player();
let song = new Song('Circles');

player.play(song);

if (player.isPlaying == true) {
    console.log(`Spielt momentan: ${player.currentlyPlayingSong.title}`);
}

