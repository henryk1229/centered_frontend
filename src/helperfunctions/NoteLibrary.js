// for mvp, input key matrix to change key and pattern ?
import { genRandom } from './helperFunctions'

// const noteMatrix = [
//
//
//   [],
//   ["E3", "A4", "F#4"],
//   ["C3", "G3", "E4", "C4"],
//   ["F3", "A3", "C4", "F4", "A4"],
//   ["Eb3", "Bb3", "Eb4", "G4", "F4", "Bb4"],
//   ["Eb3", "Bb3", "Eb4", "G4", "Eb4", "Bb3", "Eb4"],
//   ["D3", "A3", "F4", "D5", "A4", "F4", "A3", "G3"],
//   ["B4", "F#3", "B4", "C#5", "D#5", "B5", "F#5", "D#5", "C#5"],
//
// ]
//
// const bassNotes = [
//   ["Bb3", "Eb2", "G3", "Eb4"]
// ]

export const matrix = [
  {
    lead: ["Eb3", "Bb3", "Eb4", "G4", "F4", "Bb4"],
    bass: ["Bb3", "Eb2", "G2", "Eb3"]
  },
  {
    lead: ["Ab3", "Bb3", "Eb3", "C4", "C4", "Bb3"],
    bass: ["Ab2", "Eb2", "Ab3", "Eb3"]
  },
  {
    lead: ["C3", "E4", "D4", "B3", "C4", "G3"],
    bass: ["G2", "C2", "E3", "D3"]
  },
  {
    lead: ["F3", "A3", "C4", "F4", "A4", "Bb4"],
    bass: ["F2", "C2", "F3", "A3"]
  },
  {
    lead: ["Eb3", "Bb3", "Eb4", "G4", "F4", "Bb4"],
    bass: ["Bb3", "Eb2", "G2", "Eb3"]
  }
]
