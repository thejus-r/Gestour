let analysisData

const spawn = require('child_process').spawn;

text = 'Happy'

async function analysisText() {
  const ls = spawn('python', ['emotionAnalyser.py',text]);

  ls.stdout.on('data', (data) => {
  var showData = `${data}`
  analysisData = showData
  showData = JSON.parse(showData)
  console.log(showData["genre"])


});

}

function analysisText() {
  return new Promise(resolve => {
    const ls = spawn('python', ['emotionAnalyser.py',text]);

  ls.stdout.on('data', (data) => {
  var showData = `${data}`
  analysisData = showData
  //showData = JSON.parse(showData)
  //console.log(showData["genre"])
  resolve(analysisData)
  });
  });
}

async function callAnalysis() {
  const result = await analysisText();
  return result
}

callAnalysis()

module.exports = callAnalysis();