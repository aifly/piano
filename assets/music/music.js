var html5webPiano = {
	mp3Sound: {}
};

for (var i = 77; i < 92; i++) {
	html5webPiano.mp3Sound['sound' + (i - 77)] = './assets/music/' + i + '.mp3';
}