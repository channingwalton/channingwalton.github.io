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
  let startTime = audioContext.currentTime;

  tempoRanges.forEach(({ bars, startBPM, endBPM }) => {
    const beats = bars * beatsPerBar;
    const delta = (endBPM - startBPM) / beats;

    for (let beat = 0; beat < beats + 1; beat += 1) {
      const instantBPM = startBPM + (delta / beats) * beat;
      const offset = (60 / instantBPM) * beat;
      if (beat == beats) {
        // the extra beat in the loop is to set the startTime for the next tempo range
        startTime += offset;
      } else {
        playClick(startTime + offset);
      }
    }
  });

  // Reset everything (stop()) after the last click if the runNumber hasn't changed
  // If the runNumber has changed, it means the user has stopped and started whilst this timeout was running
  setTimeout(function () { if (runNumber == thisRunNumber) stop(); }, startTime * 1000 + 100);
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