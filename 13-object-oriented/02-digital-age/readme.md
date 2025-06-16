# Digital Age 🎬🎵

This project demonstrates classical inheritance in JavaScript using constructor functions and prototypes. It models `Video` and `MusicVideo` objects, showing how to extend functionality and override methods.

## Assignment 📝

> - Create a `Video` constructor with properties for `title` and `seconds`
> - Add a `watch()` method to `Video` that prints how many seconds were watched
> - Create a `MusicVideo` constructor that inherits from `Video` and adds an `artist` property
> - Add a `play()` method to `MusicVideo` that prints a message including the title and artist
> - Create an array of `Video` and `MusicVideo` objects and demonstrate their methods

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
You will see the output of the `watch` and `play` methods for each media item.

## Functions 📋

The script defines the following key functions and constructors:

- `Video(config)`: Constructor for video objects
- `Video.prototype.watch(x)`: Prints how many seconds of the video were watched
- `MusicVideo(config)`: Constructor for music video objects, inherits from `Video`
- `MusicVideo.prototype.play()`: Prints a message indicating the music video was played

## Variables Table 📊

| Variable Name | Type           | Description                                         |
|---------------|----------------|-----------------------------------------------------|
| `media`       | `Array<Object>`| Array of `Video` and `MusicVideo` instances         |

## Example Usage and Output 📤

Example output:

    You watched all 160 seconds of 'Lord of the Rings'
    You watched all 210 seconds of 'Another Brick in the Wall'
    You played 'Another Brick in the Wall' by 'Pink Floyd'
    You watched all 354 seconds of 'Bohemian Rhapsody'
    You played 'Bohemian Rhapsody' by 'Queen'
    You watched all 120 seconds of 'Inception'

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)
