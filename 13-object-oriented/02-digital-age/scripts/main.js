/**
 * @file main.js
 * @description Demonstrates classical inheritance in JavaScript using constructor functions and prototypes for Video and MusicVideo objects.
 * @author Luca Montanaro
 * @date May, 2025
 *
 * @remarks
 * This script defines a Video constructor and a MusicVideo constructor that inherits from Video.
 * It demonstrates prototype inheritance, method overriding, and instance checking.
 */

/**
 * Video constructor function.
 * @constructor
 * @param {Object} config - Configuration object.
 * @param {string} [config.title='Untitled'] - The title of the video.
 * @param {number} [config.seconds=0] - The duration of the video in seconds.
 */
function Video(config = {}) {
  this.title = config.title || 'Untitled';
  this.seconds = config.seconds || 0;
}

/**
 * Prints how many seconds of the video were watched.
 * @function watch
 * @memberof Video.prototype
 * @param {number} [x] - Number of seconds watched. If omitted, prints the total duration.
 */
Video.prototype.watch = function (x) {
  if (typeof x === 'number') {
    console.log(`You watched ${x} seconds of '${this.title}'`);
  } else {
    console.log(`You watched all ${this.seconds} seconds of '${this.title}'`);
  }
};

/**
 * MusicVideo constructor function, inherits from Video.
 * @constructor
 * @param {Object} config - Configuration object.
 * @param {string} [config.title='Untitled'] - The title of the music video.
 * @param {number} [config.seconds=0] - The duration of the music video in seconds.
 * @param {string} [config.artist='Unknown Artist'] - The artist of the music video.
 */
function MusicVideo(config = {}) {
  // Call Video constructor to set title and seconds
  Video.call(this, config);
  this.artist = config.artist || 'Unknown Artist';
}

// Inherit from Video
MusicVideo.prototype = Object.create(Video.prototype);
MusicVideo.prototype.constructor = MusicVideo;

/**
 * Prints a message indicating the music video was played.
 * @function play
 * @memberof MusicVideo.prototype
 */
MusicVideo.prototype.play = function () {
  console.log(`You played '${this.title}' by '${this.artist}'`);
};

// Create an array of Video and MusicVideo instances
const media = [
  new Video({ title: 'Lord of the Rings', seconds: 160 }),
  new MusicVideo({ title: 'Another Brick in the Wall', seconds: 210, artist: 'Pink Floyd' }),
  new MusicVideo({ title: 'Bohemian Rhapsody', seconds: 354, artist: 'Queen' }),
  new Video({ title: 'Inception', seconds: 120 }),
];

// Iterate through the media array, calling watch() and play() as appropriate
for (let item of media) {
  item.watch();
  if (item instanceof MusicVideo) {
    item.play();
  }
}
