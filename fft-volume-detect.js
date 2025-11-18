
 // CC-BY-SA cj/ZryDys 2024  console.log( 'loading: js aud volume-detection.js  ');
	
var pause=1;
const audioElement = document.getElementById('audio');  // Access the audio element
 
console.log(  'src: '+document.querySelector('source').src); //ok shows URL


// Create an AudioContext for processing audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an analyser node to analyze the audio data
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256; // This defines the frequency resolution, higher gives more detail
analyser.fftSize = 32; // min lower frequency resolution 

// Create a buffer to hold the audio data
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
console.log(  '#bins: '+bufferLength ); //ok shows bins=fft/2

// Connect the audio element to the audio context
const audioSourceNode = audioContext.createMediaElementSource(audioElement);
audioSourceNode.connect(analyser);
analyser.connect(audioContext.destination);

// Function to analyze the audio and detect amplitude/volume
function detectVolume() {
  analyser.getByteFrequencyData(dataArray); // Get frequency data
  
  // Calculate average amplitude from frequency data
  let sum = 0; let cj=[0,0,0,0,0,0,0,0]; //in pract/3
  for (let i = 0; i < bufferLength; i++) {
    sum += dataArray[i];
    cj[ Math.floor(i/2) ] += dataArray[i]; //cj regroup in 3  LF,MF,HF  16bins/5 aprox 3 groups  ==> in practice /4 /3 /2!!

  }
  const averageAmplitude = sum / bufferLength;
  
  // Output amplitude value to the console
  console.log("Average Amplitude:", averageAmplitude, dataArray, 'll', cj); // cj make 3 broad LF,MF,HF frequency cj[0]/4,cj[1]/4,(cj[3]+cj[2])/4ranges  , rgb[0],  cj[2]
  
  // Adjust background color based on amplitude
  const redValue = Math.min(255, (255 * averageAmplitude) / 255); // Map to red tone
    console.log("red:", redValue); // 
  document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`; // Change background to red based on volume
    document.body.style.backgroundColor = `rgb(${cj[0]/2.3}, ${cj[1]/2}, ${(cj[2]+cj[3]+cj[4]+cj[5]+cj[6])/2})`; // Change background to red based on volume

  if (pause==0) requestAnimationFrame(detectVolume); // cj Continue detecting volume
}

// Start detecting volume once the audio is playing
audioElement.addEventListener('play', () => {
  audioContext.resume().then(() => {
    pause=0;detectVolume();
  });
});

audioElement.addEventListener('pause', () => {
	console.log(  'pause: ' ); // 

  audioContext.resume().then(() => {
    pause=1;	console.log(  'pause: ' ); // 

  });
});
/* ---------------------- need a try {} err
// Microphone Input Handling
const startMicButton = document.getElementById('start-microphone');
startMicButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      const micSource = audioContext.createMediaStreamSource(stream);
      micSource.connect(analyser);
      detectVolume(); // Start detecting volume from microphone
    })
    .catch((err) => {
      console.error('Microphone error:', err);
    });
});
*/
