var html5webPiano = {
	mp3Sound: {}
};

for (var i = 63; i < 92; i++) {
	html5webPiano.mp3Sound['sound' + (i - 63)] = './assets/music/' + i + '.mp3';
}