let px = e.clientX-window.innerWidth/2
let py = e.clientY-window.innerHeight/2

let r = Math.log(Math.sqrt(px*px+py*py)/10)*10
if (r<10)
  r=10

let pos = {
  x: Math.cos(e.clientX)*r/10,
  y: Math.sin(e.clientY)*r/10,
  z: 1,
}

panner.setPosition(pos.x,pos.y,pos.z)
console.log("X", panner.positionX, "Y", panner.positionY)
