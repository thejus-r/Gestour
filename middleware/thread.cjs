const { PythonShell } = require("python-shell");

module.exports = async (text) => {
  const status = ({
    success,
    err = "",
    result,
  } = await new Promise((resolve, reject) => {
    PythonShell.run(
      "emotionAnalyser.py",
      { args: [text] },
      function (err, result) {
        if (err) {
          reject({ success: false, err });
        }
        resolve({ success: true, result });
      }
    );
  }));
  return status;
};

// module.exports = async (text) => {
//   const spawn = require("child_process").spawn;

//   const ls = spawn("python", ["emotionAnalyser.py", text]);

//   ls.stdout.on("data", async (data) => {
//     var showData = `${data}`;
//     //console.log(showData);
//     return await showData;
//   });
// };
