const getGener = require("../middleware/thread.cjs");

const text =
  "In this fact-based film, John Holmes (Val Kilmer) is one of the most successful porn stars of all time. But, when his rampant drug abuse forces him into prostitution, both his disapproving wife, Sharon (Lisa Kudrow), and his 16-year-old girlfriend, Dawn (Kate Bosworth), are on the verge of leaving him. As John sinks lower and lower into Hollywood, Calif.'s criminal underworld, he meets a seedy drug lord (Eric Bogosian) and finds himself caught up in a tragic chain of events.";

await getGener(text).then(console.log);
