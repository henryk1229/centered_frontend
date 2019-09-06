// or pass in range or numbers as arg
export function genRandomOsc(){
  return  Math.floor(Math.random() * 4)
}
export function genRandomDetune(){
  return - ((Math.floor(Math.random() * 6) * 100) + 600)
}
