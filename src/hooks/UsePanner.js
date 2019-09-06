import React, { useState, useEffect } from 'react'
import Tone from 'tone'

export const usePanner = (props) =>{

  let WIDTH = window.innerWidth;
  let HEIGHT = window.innerHeight;

  let xPos = Math.floor(WIDTH/2);
  let yPos = Math.floor(HEIGHT/2);
  let zPos = 295;

// define other variables

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();

  let panner = new Tone.Panner3D;
  panner.panningModel = 'HRTF';
  panner.distanceModel = 'inverse';
  panner.refDistance = 1;
  panner.maxDistance = 10000;
  panner.rolloffFactor = 1;
  panner.coneInnerAngle = 360;
  panner.coneOuterAngle = 0;
  panner.coneOuterGain = 0;

  if(panner.orientationX) {
    panner.orientationX.value = 1;
    panner.orientationY.value = 0;
    panner.orientationZ.value = 0;
  } else {
    panner.setOrientation(1,0,0);
  }
  panner.toMaster()

return panner

}
