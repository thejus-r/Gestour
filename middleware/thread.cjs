module.exports = async (text) => {
  const spawn = require("child_process").spawn;

  const ls = spawn("python", ["emotionAnalyser.py", text]);

  var showData;

  ls.stdout.on("data", (data) => {
    showData = `${data}`;

    showData = JSON.parse(showData);
    console.log("from thread.js ", showData);

    return showData;
  });
  return Promise.resolve(showData);
};
