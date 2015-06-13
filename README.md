# Twine Sound Macros
A small series of basic sound macros for use in Twine. Mostly ones that I've needed myself but I'll be adding more as I need them/people ask for.

## What's in this file?
+ Create
+ Play
+ Loop
+ Pause
+ Increase Volume
+ Decrease Volume
+ Increase Playback
+ Decrease Playback

## Setup
Cool! Here are some quick steps to take for getting this going in your Twine game:

1. Copy the code from sound-macros.js into a new `script` file in your Twine game
2. Make sure your sound files (`mp4, m4v, m4a, mp3, ogv, ogm, ogg, oga, webm, wav`) are in the same folder as your Twine game.
3. Make a variable for each sound file in your Start passage
  * `<<set $sound = "sound.mp3">>`
4. Now you can start to call all of your audio files with the macros!
5. Dance to your cool new music!

## Documentation
You can call any of the macros from your passages with the following commands:
+ Create - `<<createSound $sound>>`
  + Will create an `<audio>` element but will not play it. Useful for preloading sounds for later use.
+ Play - `<<playSound $sound>>`
  + Will play the chosen audio file. Must be used before any command except `loopSound`
+ Loop - `<<loopSound $sound>>`
  + Will loop the chosen audio file. Must be used before any command except `playSound`
+ Pause - `<<pauseSound $sound>>`
  + Will pause the chosen audio file.
+ Increase Volume - `<<increaseVolume $sound>>`
  + Will increase volume by 0.1 (0 being silent, 1 being the loudest that your audio will go).
+ Decrease Volume - `<<decreaseVolume $sound>>`
  + Will decrease volume by 0.1 (0 being silent, 1 being the loudest that your audio will go).
+ Increase Playback - `<<increasePlayback $sound>>`
  + Will increase playback speed by 0.1.
+ Decrease Playback - `<<decreasePlayback $sound>>`
  + Will decrease playback speed by 0.1.

## Other Notes
I know that there are smarter and "cooler" ways of making these macros and I'm game for streamlining this more. However, I wanted to keep the macros simple and easy for the average user to understand and tweak.

Oh! If you end up using these macros in your next Twine game, I would love to hear about it! You can find me on twitter: [@jlevstein](https://twitter.com/jlevstein)
