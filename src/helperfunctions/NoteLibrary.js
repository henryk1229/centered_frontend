// for mvp, input key matrix to change key and pattern ?
import { genRandom } from './helperFunctions'



const keyMatrix = [
  ["C"]
]

const chooseNoteMatrix = noteMatrix => {
  return noteMatrix[(genRandom() - 1)]
}

export default chooseNoteMatrix(noteMatrix)
