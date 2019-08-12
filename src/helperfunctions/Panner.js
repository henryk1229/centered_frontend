import Tone from 'tone'

export function createPanner(){

  let panner = new Tone.Panner3D().toMaster()
  panner.panningModel = 'HRTF';
  panner.distanceModel = 'inverse';
  panner.refDistance = 1;
  panner.maxDistance = 10000;
  panner.rolloffFactor = 1;
  panner.coneInnerAngle = 360;
  panner.coneOuterAngle = 360;
  panner.coneOuterGain = 0;
  panner.setOrientation(0,0,2)
  panner.toMaster()

  return panner

}
