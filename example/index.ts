import { logger, colors } from "../src/index.js";
logger(
  colors().red.greenBg.log("hello"),
  "world",
  colors().green("芋头").fontsize(24)
);
logger(
  colors().red().snow().greenBg().log("hello"),
  "world",
  colors().green("芋头")
);
logger(
  colors().red().fontsize(48).fontfamily("SignPainter").log("hello"),
  "world",
  colors().green("芋头")
);

logger(
  colors().white().redBg("hello"),
  "world",
  colors().white().padding(2, 5).greenBg("芋头").italic()
);

logger(
  colors().white.redBg("hello").linethrough(),
  "world",
  colors().white.padding(2, 5).underline().lightgrey("芋头")
);
