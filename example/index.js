import { logger, colors } from "../src/index.js";
logger(colors().red.greenBg.log("hello"), "world", colors().green("芋头"));
logger(colors().red().greenBg().log("hello"), "world", colors().green("芋头"));
logger(colors().red().greenBg("hello"), "world", colors().green("芋头"));

logger(
  colors().white().redBg("hello"),
  "world",
  colors().white().padding(2, 5).greenBg("芋头")
);

logger(
  colors().white.redBg("hello"),
  "world",
  colors().white.padding(2, 5).greenBg("芋头")
);
