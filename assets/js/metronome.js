let audioContext;

// track how many times start has been called. See use in start().
let runNumber = 0;

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton")
const tempoTextArea = document.getElementById("tempoTextArea");

function parseTempoBlock(block) {
  const allLines = block.trim().split("\n");
  let lines = allLines.filter(line => /^\d/.test(line));

  const beatsPerBar = parseInt(lines[0]);
  const tempoRanges = lines.slice(1).map(line => parseTempoLine(line));
  return { beatsPerBar, tempoRanges };
}

function parseTempoLine(line) {
    let [bars, bpm] = line.split(" ");
    let startBPM;
    let endBPM;
    if (bpm.indexOf("-") > 0) {
      [startBPM, endBPM] = bpm.split("-");
    } else {
      startBPM = bpm;
      endBPM = bpm;
    }
    return {
      bars: parseInt(bars),
      startBPM: parseInt(startBPM),
      endBPM: parseInt(endBPM)
    };
}

function playClick(time) {
  const osc = audioContext.createOscillator();
  osc.connect(audioContext.destination);
  osc.start(time);
  osc.stop(time + 0.04);
}

function start() {
  runNumber += 1;
  let thisRunNumber = runNumber;

  startButton.disabled = true;
  stopButton.disabled = false;

  const tempoBlock = tempoTextArea.value;
  const { beatsPerBar, tempoRanges } = parseTempoBlock(tempoBlock);

  audioContext = new AudioContext();
  let clickTime = audioContext.currentTime;
  let totalBeats = 0

  tempoRanges.forEach(({ bars, startBPM, endBPM }) => {
    //console.log("bars", bars, "startBPM", startBPM, "endBPM", endBPM);
    const beats = bars * beatsPerBar;

    const startInterval = 60.0 / startBPM;
    const endInterval = 60.0 / endBPM;
    const delta = (endInterval - startInterval) / beats;
    //console.log("startInterval", startInterval, "endInterval", endInterval, "delta", delta);

    playClick(clickTime);
    for (let beat = 0; beat < beats; beat += 1) {
      const nextInterval = startInterval + (delta * beat);
      clickTime = clickTime + nextInterval;
      totalBeats += 1;
      //console.log("beat", totalBeats, "clickTime", clickTime);
      if (beat < beats - 1) {
        playClick(clickTime);
      }
    }
  });

  // Reset everything (stop()) after the last click if the runNumber hasn't changed
  // If the runNumber has changed, it means the user has stopped and started whilst this timeout was running
  setTimeout(function () { if (runNumber == thisRunNumber) stop(); }, clickTime * 1000 + 200);
}

function stop() {
  if (audioContext != null && audioContext.state != "closed") audioContext.close();
  startButton.disabled = false;
  stopButton.disabled = true;
}

function loadSong(music) {
  if (music == "") return;
  fetch("/assets/ritronome/" + music + ".txt")
  .then(response => response.text())
  .then(text => {
    tempoTextArea.value = text;
  });
}