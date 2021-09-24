

## !!!package is under construction/develoment!!!



## [@jasonfleischer/piano](https://www.npmjs.com/package/@jasonfleischer/piano)

A package for displaying notes, chords and scales on a keyboard. Click [HERE](https://jasonfleischer.github.io/npm-piano-demo/) to see a demo

![Screenshot](https://jasonfleischer.github.io/npm-piano-demo/screenshot/screen.png "Screenshot")

#### Installation
```bash
$ npm i @jasonfleischer/piano
```

#### Usage
``` html
	<div class="your_piano_id"></div>
```

``` javascript
const piano = require("@jasonfleischer/piano")

piano.init({
	range: '10',
	interactive: false,
	width: 700
});

// draw a note
midiValue = 45 // A2
piano.drawNote(midiValue);

// draw a chord
midiValue = 60 // C4
piano.drawChord(midiValue)


```
