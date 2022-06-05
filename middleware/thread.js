// module.exports.doAnalysis = async function(text) {

//   const spawn = require('child_process').spawn;

//   const ls = spawn('python', ['emotionAnalyser.py',text]);

//   ls.stdout.on('data', (data) => {

//     var showData = `${data}`
//     var analysisData = showData

//     showData = JSON.parse(showData)
//     console.log("from thread.js ", showData)

//     return showData

//     }
//   );

// }