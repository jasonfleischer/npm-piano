## [@jasonfleischer/piano](https://www.npmjs.com/package/@jasonfleischer/piano)

A package for displaying notes, chords and scales on a keyboard. Click [HERE](https://jasonfleischer.github.io/npm-piano-demo/) to see a demo

![Screenshot](https://jasonfleischer.github.io/npm-piano-demo/screenshot/screen.png "Screenshot")

#### Installation
```bash
$ npm i @jasonfleischer/piano
```

#### Usage
``` html
<div id="your_piano_id"></div>
```

``` javascript
const pianoKit = require("@jasonfleischer/piano")
const musicKit = require("@jasonfleischer/music-model-kit");
musicKit.init();

const pianoView = pianoKit.build({
	id: 'your_piano_id',
	range: {
		min: 60, // midi value = C3
		max: 72  // midi value = C4
	},
	width: 325,
	onClick: function(note, isOn) {
		if(isOn) {
			pianoView.drawNote(note);
		} else {
			pianoView.clearNote(note);
		}
	},
	hover: true
});

// draw a note
let midiValue = 45; // A2
let note = musicKit.all_notes[midiValue];
pianoView.drawNote(note);

// draw a chord
let midiValue = 60 // C4
let note = musicKit.all_notes[midiValue];
let chord = new musicKit.Chord(note, musicKit.Chord.TYPE.minor);
pianoView.drawChord(chord);

// draw a scale
let midiValue = 62 // D
let note = musicKit.all_notes[midiValue];
let scale = new musicKit.Scale(note, musicKit.Scale.TYPE.Aeolian); // Dm scale
pianoView.drawScale(scale);

// clear drawings
pianoView.clear();

// add a midi listener
new musicKit.MidiListener(
	function (midiValue, channel, velocity) { // note on
		let note = musicKit.all_notes[midiValue];
		pianoView.drawNote(note);
	},
	function (midiValue, channel, velocity) { // note off
		let note = musicKit.all_notes[midiValue];
		pianoView.clearNote(note);
	});

```
