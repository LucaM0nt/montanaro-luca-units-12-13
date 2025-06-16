function Video(config = {}) {
  this.title = config.title || 'Untitled';
  this.seconds = config.seconds || 0;
}

Video.prototype.watch = function (x) {
  if (typeof x === 'number') {
    console.log(`You watched ${x} seconds of '${this.title}'`);
  } else {
    console.log(`You watched all ${this.seconds} seconds of '${this.title}'`);
  }
};

function MusicVideo(config = {}) {
  // Call Video constructor to set title and seconds
  Video.call(this, config);
  this.artist = config.artist || 'Unknown Artist';
}

// Inherit from Video
MusicVideo.prototype = Object.create(Video.prototype);
MusicVideo.prototype.constructor = MusicVideo;

// Add play method
MusicVideo.prototype.play = function () {
  console.log(`You played '${this.title}' by '${this.artist}'`);
};

const media = [
  new Video({ title: 'Lord of the Rings', seconds: 160 }),
  new MusicVideo({ title: 'Another Brick in the Wall', seconds: 210, artist: 'Pink Floyd' }),
  new MusicVideo({ title: 'Bohemian Rhapsody', seconds: 354, artist: 'Queen' }),
  new Video({ title: 'Inception', seconds: 120 }),
];

for (let item of media) {
  item.watch();
  if (item instanceof MusicVideo) {
    item.play();
  }
}
